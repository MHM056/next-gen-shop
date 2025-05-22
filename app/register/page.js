import Link from "next/link";
import styles from "./page.module.css";

export default function Register() {
    return (
        <div className={styles.bg}>
            <img className={styles.background} src="/images/background.jpg"></img>
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
    );
}