import { NextResponse } from "next/server";

import { verifyJWT } from "@/lib/jwt";
import { createProduct } from "@/lib/controllers/productController";

export async function POST(req) {
    try {
        const token = req.cookies.get("token")?.value;
        const admin = await verifyJWT(token);

        if (!admin || admin.role !== "admin") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const itemData = await req.json();
        console.log("API");
        console.log(itemData);
        

        const newData = await createProduct(itemData);

        return NextResponse.json(newData, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}