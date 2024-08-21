import { NextResponse } from "next/server";


export function middleware(req: Request) {
    console.log('hello there');
    //return Response.json({ msg: 'hello there' });
    return NextResponse.redirect(new URL('/', req.url));
};

export const config = {
    matcher: ['/about/:path*', '/tour/:path*'],
}