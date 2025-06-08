"use client";
import Link from "next/link";
import styles from "./UserContainer.module.css";
import { useState } from "react";
import { logoutUser } from "@/lib/api/userAuth";
import { useRouter } from "next/navigation";

export default function UserContainer() {
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();
    const isLoggedIn = true;

    function toggleDropdown() {
        setShowDropdown(prev => !prev);
    }

    async function logout() {
        try {
            await logoutUser();
            router.push('/');
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div className={styles["user-container"]}>
            <i className="ri-user-line" onClick={toggleDropdown}></i>
            <span>1</span>
            {showDropdown && (
                <div className={styles.dropdown} onClick={toggleDropdown}>
                    {!isLoggedIn ? (
                        <>
                            <Link href="/login" prefetch={false}><i className="ri-login-circle-line" /> Login</Link>
                            <Link href="/register" prefetch={false}><i className="ri-user-add-line" /> Register</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/profile" prefetch={false}><i className="ri-user-line" /> My Profile</Link>
                            <Link href="/orders" prefetch={false}><i className="ri-lock-line" /> My Orders</Link>
                            <Link href="/wishlist" prefetch={false}><i className="ri-heart-line" /> Wishlist</Link>
                            <Link href="" onClick={logout} prefetch={false}><i className="ri-logout-circle-line" /> Logout</Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}