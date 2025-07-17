import { verifyJWT } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const protectedRoutes = ["/admin"];
const publicRoutes = ["/","/login", "/register", "/about"]

export default async function middleware(req) {
    const path = req.nextUrl.pathname;
    
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const token = (await cookies()).get("token")?.value;
    const userData = verifyJWT(token);
    const isAuth = userData && userData.role === "admin";
  
    

    if (isProtectedRoute && !isAuth) {
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }

    return NextResponse.next();
}