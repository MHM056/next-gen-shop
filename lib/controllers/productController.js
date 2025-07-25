import Item from "@/models/Item";
import { connectToDB } from "../db";

export async function createProduct(itemData) {
    await connectToDB();

    const existing = await Item.findOne({ title: itemData.title });

    if (existing) {
        throw new Error("Item already exists");
    }

    const product = await Item.create(itemData);

    return product;
}