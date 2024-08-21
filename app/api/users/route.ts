import { NextRequest, NextResponse } from "next/server";
import { fetchUsers, saveUser } from "@/utils/actions";

export const GET = async (req: NextRequest) => {
    //console.log(req);
    //const {searchParams} = new URL(req.url);
    //const id = searchParams.get('id');
    //console.log(id);

    console.log(req.url);
    console.log(req.nextUrl.searchParams.get('id'));

    const users = await fetchUsers();
    //return NextResponse.redirect(new URL('/', req.url));
    return Response.json({ users });
};


export const POST = async (req: Request) => {
    const user = await req.json();
    //console.log(user);
    const newUser = { ...user, id: Date.now().toString() };
    await saveUser(newUser);

    return Response.json({msg: 'user created'});
}