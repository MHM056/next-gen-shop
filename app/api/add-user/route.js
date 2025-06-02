import { NextResponse } from "next/server";

import { verifyJWT } from "@/lib/jwt";
import { addUser } from "@/lib/controllers/userController";

export async function POST(req) {
    try {
        const token = req.cookies.get("token")?.value;
        const admin = verifyJWT(token);

        if (!admin || admin.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const { email, password, role } = await req.json();

        const user = await addUser({ email, password, role }, admin);

        return NextResponse.json(user, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}