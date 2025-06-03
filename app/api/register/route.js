import { register } from "@/lib/controllers/userController";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password, repeatPassword } = await req.json();

        if (password !== repeatPassword) {
            return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
        }

        const { token, ...user } = await register({ email, password });

        cookies().set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        })

        return NextResponse.json(user, { status: 201 });

    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}