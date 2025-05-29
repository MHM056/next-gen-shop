"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { registerUser } from "@/lib/api/userAuth";
import { useRouter } from "next/navigation";

export default function Register() {
    const [error, setError] = useState('');
    const router = useRouter();

    async function registerHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeatPassword');

        try {
            await registerUser({ email, password, repeatPassword });
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className={styles["hero-section"]}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <form onSubmit={registerHandler} className={styles.form}>
                    <div>
                        <img src="/images/Logo.png" className={styles.logo} />
                    </div>
                    <h1>Register</h1>
                    <input name="email" type="text" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <input name="repeatPassword" type="password" placeholder="Repeat Password" />
                    {error && <p>{error}</p>}
                    <p>Already registered? <Link href="/login">Login</Link></p>
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
}