import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        },
        quantity: Number
    }],
    total: Number,
    status: {
        type: String,
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Order", orderSchema);