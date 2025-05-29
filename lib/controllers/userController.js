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
    const token = signJWT({ id: user._id, email: user.email });

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

    const token = signJWT({ id: user._id, email: user.email });

    return {
        id: user._id,
        email: user.email,
        token
    };
}