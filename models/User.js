import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [4, "Password must be at least 4 characters"],
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: "Password must contain only letters and digits"
        }
    },
    role: {
        type: String,
        enum: ["user", "moderator", "admin"],
        default: "user"
    },
    orders: [{
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
        date: Date,
        status: String
    }],
    cart: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        },
        quantity: {
            type: Number,
            default: 1
        }
    }]
}, {
    timestamps: true
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
}

export default mongoose.models.User || mongoose.model("User", userSchema);