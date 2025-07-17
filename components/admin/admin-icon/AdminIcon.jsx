"use client";
import Link from "next/link";
import styles from "./AdminIcon.module.css";
import { usePathname } from "next/navigation";

export default function AdminIcon() {
    const pathname = usePathname();

    if (pathname === "/admin") {
        return null;
    }

    return (
        <div className={styles["admin-icon"]}>
            <Link href="/admin" className={styles.a}><i className="ri-admin-line"></i></Link>
        </div>
    );
}