"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import styles from "./AdminIcon.module.css";

export default function AdminIcon() {
    const pathname = usePathname();
    const { user, loading } = useAuth();

    if (pathname === "/admin") return null;

    return (
        <div className={styles["admin-icon"]}>
            <Link href="/admin"><i className="ri-admin-line"></i></Link>
        </div>
    );
}
