import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

if (!SECRET) {
    throw new Error("JWT Secret is not defined");
}

export function signJWT(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyJWT(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch {
        return null;
    }
}