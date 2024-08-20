'use server';
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


type User = {
    id: string;
    firstname: string;
    lastname: string;
};

export const createUser = async(formData: FormData) => {
    'use server';
    await new Promise(resolve => setTimeout(resolve, 3000));
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    // const rawData = Object.fromEntries(formData)
    // console.log(rawData);

    const newUser: User = { firstname, lastname, id: Date.now().toString()};

    try {
        //console.log({ firstname, lastname});
        await saveUser(newUser);
    } catch (error) {
        console.log(error);
    };

    // revalidatePath('/actions'); this will activately refresh after render
    redirect('/');
};

export const fetchUsers = async (): Promise<User[]> => {
    const result = await readFile('users.json',{encoding: 'utf8'});
    const users = result ? JSON.parse(result) : [];
    return users;
};

const saveUser = async (user: User) => {
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
};