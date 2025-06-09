"use client";
import Link from "next/link";
import styles from "./UserContainer.module.css";
import { useEffect, useRef, useState } from "react";
import { logoutUser } from "@/lib/api/userAuth";
import { useRouter } from "next/navigation";

export default function UserContainer() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();
    const isLoggedIn = true;

    function toggleDropdown() {
        setShowDropdown(prev => !prev);
    }

    async function handleLogout() {
        try {
            await logoutUser();
            router.push("/");
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles["user-container"]} ref={dropdownRef}>
            <i className="ri-user-line" onClick={toggleDropdown}></i>
            <span>1</span>
            {showDropdown && (
                <div className={styles.dropdown} onClick={toggleDropdown}>
                    {!isLoggedIn ? (
                        <>
                            <Link href="/login"><i className="ri-login-circle-line" /> Login</Link>
                            <Link href="/register"><i className="ri-user-add-line" /> Register</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/profile"><i className="ri-user-line" /> My Profile</Link>
                            <Link href="/orders"><i className="ri-lock-line" /> My Orders</Link>
                            <Link href="/wishlist"><i className="ri-heart-line" /> Wishlist</Link>
                            <Link href="" onClick={handleLogout}><i className="ri-logout-circle-line" /> Logout</Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}