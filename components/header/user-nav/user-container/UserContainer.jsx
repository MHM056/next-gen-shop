import Link from "next/link";
import styles from "./UserContainer.module.css";
import { useState } from "react";

export default function UserContainer() {
    const [showDropdown, setShowDropdown] = useState(false);
    const isLoggedIn = false;

    function toggleDropdown() {
        setShowDropdown(prev => !prev);
    }
    return (
        <div className={styles["user-container"]}>
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
    );
}