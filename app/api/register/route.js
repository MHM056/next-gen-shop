import { register } from "@/lib/controllers/userController";

export async function POST(req) {
    try {
        const { email, password, repeatPassword } = await req.json();

        if (password !== repeatPassword) {
            return Response.json({ error: "Passwords do not match" }, { status: 400 });
        }

        const user = await register({ email, password });
        
        return Response.json(user, { status: 201 });

    } catch (err) {
        return Response.json({ error: err.message }, { status: 400 });
    }
}