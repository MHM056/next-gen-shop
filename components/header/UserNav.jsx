"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./UserNav.module.css";
import Link from "next/link";

export default function UserNav() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const isLoggedIn = true;

    function toggleDropdown() {
        setShowDropdown(prev => !prev);
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles["user-nav"]}>
            <div className={styles["search-container"]}>
                <input type="text" placeholder="Search products..." />
                <i className="ri-search-line"></i>
            </div>
            <div className={styles["icon-container"]}>
                <i className="ri-user-line" onClick={toggleDropdown} ref={dropdownRef}></i>
                <span>1</span>
                {showDropdown && (
                    <div className={styles.dropdown}>
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
                                <Link href="/logout"><i className="ri-logout-circle-line" /> Logout</Link>
                            </>
                        )}
                    </div>
                )}
            </div>
            <div>
                <i className="ri-shopping-cart-line"></i>
                <span>2</span>
            </div>
            <div>
                <i className="ri-heart-line"></i>
            </div>
        </div>
    );
}