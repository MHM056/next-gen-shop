import Link from "next/link";
import styles from "./page.module.css";

export default function Register() {
    return (
        <div className={styles["hero-section"]}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <form className={styles.form}>
                    <div>
                        <img src="/images/Logo.png" className={styles.logo} />
                    </div>
                    <h1>Register</h1>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Repeat Password" />
                    <p>Already registered? <Link href="/login">Login</Link></p>
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
}