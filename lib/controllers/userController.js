import User from "@/models/User";
import { signJWT } from "../jwt";
import { connectToDB } from "../db";
import sendEmail from "../utils/sendEmail";

export async function register({ email, password }) {
    await connectToDB();

    const registered = await User.findOne({ email });

    if (registered) {
        throw new Error("Email already registered");
    }

    const user = await User.create({ email, password });

    const token = await signJWT({ id: user._id, email: user.email, role: user.role });

    await sendEmail({
        to: `${process.env.EMAIL_USERNAME}`,
        subject: 'New user registration',
        text: `User ${user.email} has just registered in the website.`
    });

    return {
        id: user._id,
        email: user.email,
        token
    };
}

export async function login({ email, password }) {
    await connectToDB();

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    const token = await signJWT({ id: user._id.toString(), email: user.email, role: user.role });

    return {
        id: user._id,
        email: user.email,
        role: user.role,
        token
    };
}

export async function addUser({ email, password, role }, admin) {
    await connectToDB();

    const registered = await User.findOne({ email });

    if (registered) {
        throw new Error("Email already registered");
    }

    const user = await User.create({ email, password, role });

    await sendEmail({
        to: `${process.env.EMAIL_USERNAME}`,
        subject: 'New user added',
        text: `Admin ${admin.email} created a new user (${user.email}) with role: ${role}.`
    });

    return {
        id: user._id,
        role: user.role,
        email: user.email,
    };
}

export async function getAllUsers() {
    await connectToDB();

    const users = await User.find().select("-password");

    return users;
}