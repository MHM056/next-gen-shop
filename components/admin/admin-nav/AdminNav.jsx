import styles from "./AdminNav.module.css";

export default function AdminNav({ adminName }) {
    return (
        <nav className={styles["admin-nav"]}>
            <div>
                <span className={styles.title}>Admin Dashboard</span>
            </div>
            <div>
                <div className={styles["admin-logout"]}>
                    <div>
                        <i className="ri-user-line"></i>
                        <span>Admin</span> <span>{adminName}</span>
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
