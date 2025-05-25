import { login } from "@/lib/controllers/userController";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const user = await login({ email, password });
        return Response.json(user, { status: 200 });
    } catch (err) {
        return Response.json({ error: err.message }, { status: 401 });
    }
}