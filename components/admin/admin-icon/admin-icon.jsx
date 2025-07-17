"use client";
import Link from "next/link";
import styles from "./admin-icon.module.css";

export default function AdminIcon() {
    
    return (
        <div className={styles["admin-icon"]}>
            <Link href="/admin" className={styles.a}><i className="ri-admin-line"></i></Link>
        </div>
    );
}