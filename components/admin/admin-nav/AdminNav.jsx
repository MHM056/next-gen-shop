import styles from "./AdminNav.module.css";

export default function AdminNav() {
    return (
        <nav className={styles["admin-nav"]}>
            <div>
                <button><i className="ri-close-line"></i></button>
                <span className={styles.title}>Admin Panel</span>
            </div>
            <div>
                <div className={styles["admin-logout"]}>
                    <div>
                        <i className="ri-user-line"></i>
                        <span>Admin</span>
                    </div>
                    <div className={styles.logout}>
                        <i className="ri-logout-box-line"></i>
                        <a>Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
