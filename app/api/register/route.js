import { register } from "@/lib/controllers/userController";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const user = await register({ email, password });
        return Response.json(user, { status: 201 });
    } catch (err) {
        return Response.json({ error: err.message }, { status: 400 });
    }
}