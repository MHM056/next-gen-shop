import { login } from "@/lib/controllers/userController";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        const { token, ...user } = await login({ email, password });

        const cookieStore =  await cookies();

        cookieStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        });

        return NextResponse.json(user, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 401 });
    }
}