"use client";
import { useState } from "react";
import styles from "./UserNav.module.css";
import Link from "next/link";

export default function UserNav() {
    const [showDropdown, setShowDropdown] = useState(false);
    const isLoggedIn = false;

    function toggleDropdown() {
        setShowDropdown(prev => !prev);
    }

    return (
        <div className={styles["user-nav"]}>
            <div className={styles["search-container"]}>
                <input type="text" placeholder="Search products..." />
                <i className="ri-search-line"></i>
            </div>
            <div className={styles["icon-container"]}>
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