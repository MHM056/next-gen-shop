import { verifyJWT } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json({ user: null }, { status: 401 });
    }

    try {
        const decoded = verifyJWT(token);
        return NextResponse.json({ user: decoded }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ user: null }, { status: 401 });
    }
}