'use server';
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


type User = {
    id: string;
    firstname: string;
    lastname: string;
};

export const createUser = async(prevState: any, formData: FormData) => {
    'use server';
    console.log(prevState);
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    // const rawData = Object.fromEntries(formData)
    // console.log(rawData);

    const newUser: User = { firstname, lastname, id: Date.now().toString()};

    try {
        //console.log({ firstname, lastname});
        //throw new Error('something went wrong'); - throw error to change the form error message
        await saveUser(newUser);
        revalidatePath('/actions'); //this will activately refresh after render

        return 'user created successfully';
    } catch (error) {
        console.log(error);
        return 'failed to create user';
    };
    //redirect('/');
};

export const fetchUsers = async (): Promise<User[]> => {
    const result = await readFile('users.json',{encoding: 'utf8'});
    const users = result ? JSON.parse(result) : [];
    return users;
};

export const saveUser = async (user: User) => {
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
    const id = formData.get('id') as string;
    const users = await fetchUsers();
    const updatedUsers = users.filter(user => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
};

export const removeUser = async (id: string, formData: FormData) => {
    const name = formData.get('name') as string;
    console.log(name);

    const users = await fetchUsers();
    const updatedUsers = users.filter(user => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
};