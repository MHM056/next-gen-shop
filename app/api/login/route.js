import { login } from "@/lib/controllers/userController";
import { cookies } from "next/headers";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        const { token, ...user } = await login({ email, password });

        cookies().set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        });

        return Response.json(user, { status: 200 });
    } catch (err) {
        return Response.json({ error: err.message }, { status: 401 });
    }
}