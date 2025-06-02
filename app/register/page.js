"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { registerUser } from "@/lib/api/userAuth";
import { useRouter } from "next/navigation";
import validateRegisterData from "@/lib/utils/validateData";

export default function Register() {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);
    const router = useRouter();

    async function registerHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeatPassword');

        try {
            validateRegisterData({ email, password, repeatPassword });
            setCreatingUser(true);
            await registerUser({ email, password, repeatPassword });
            router.push('/');
        } catch (err) {
            setError(err.message);
            setCreatingUser(false);
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

                    <div className={styles["input-wrapper"]}>
                        <input
                            name="repeatPassword"
                            type={showRepeatPassword ? "text" : "password"}
                            placeholder="Repeat Password"
                            required
                        />
                        <i className={`ri-eye-${showRepeatPassword ? "off-line" : "line"} ${styles["eye-icon"]}`}
                            onClick={() => setShowRepeatPassword(prev => !prev)}
                        ></i>
                    </div>

                    {error && <p>{error}</p>}
                    <p>Already registered? <Link href="/login">Login</Link></p>
                    <button>{creatingUser ? "Creating User..." : "Register"}</button>
                </form>
            </div>
        </div>
    );
}