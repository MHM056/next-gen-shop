"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { loginUser } from "@/lib/api/userAuth";
import { useRouter } from "next/navigation";
import validateData from "@/lib/utils/validateData";
import { useAuth } from "@/app/context/AuthContext";

export default function Login() {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loggingUser, setLoggingUser] = useState(false);
    const router = useRouter();
    const { user, setUser } = useAuth();

    async function loginHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            setLoggingUser(true);
            validateData.onLogin({ email, password });
            const user = await loginUser({ email, password });
            setUser(user);
            router.push('/');
        } catch (err) {
            setError(err.message);
            setLoggingUser(false);
        }
    }

    return (
        <div className={styles["hero-section"]}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <form onSubmit={loginHandler} className={styles.form}>
                    <div>
                        <img src="/images/Logo.png" className={styles.logo} />
                    </div>
                    <h1>Login</h1>
                    <input name="email" type="text" placeholder="Email" required />
                    <div className={styles["input-wrapper"]}>
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                        />
                        <i className={`ri-eye-${showPassword ? "off-line" : "line"} ${styles["eye-icon"]}`}
                            onClick={() => setShowPassword(prev => !prev)}
                        ></i>
                    </div>

                    {error && <p>{error}</p>}
                    <p>Don't have an account? <Link href="/register">Register</Link></p>
                    <button>{loggingUser ? "Logging in..." : "Login"}</button>
                </form>
            </div>
        </div>
    );
}