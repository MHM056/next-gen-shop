import { NextResponse } from "next/server";

import { verifyJWT } from "@/lib/jwt";
import { getAllUsers } from "@/lib/controllers/userController";

export async function GET(req) {
    try {
        const token = req.cookies.get("token")?.value;
        
        const admin = await verifyJWT(token);

        if (!admin || admin.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const users = await getAllUsers();

        return NextResponse.json(users, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}