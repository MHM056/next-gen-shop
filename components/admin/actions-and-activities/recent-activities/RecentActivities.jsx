import styles from "./RecentActivities.module.css";

export default function RecentActivities() {
    return (
        <div className={styles["recent-activities"]}>
            <div>
                <h3>Recent Activities</h3>
            </div>
            <div>
                <div className={styles.activity}>
                    <div>
                        <i className={`ri-check-line ${styles["order-icon"]}`}></i>
                    </div>
                    <div>
                        <p className={styles["activity-title"]}>Order #ORD-7843 has been completed</p>
                        <p className={styles["activity-time"]}>2 minutes ago</p>
                    </div>
                </div>
                <div className={styles.activity}>
                    <div>
                        <i className={`ri-user-add-line ${styles["user-icon"]}`}></i>
                    </div>
                    <div>
                        <p className={styles["activity-title"]}>New user registration: Alexander Thompson</p>
                        <p className={styles["activity-time"]}>15 minutes ago</p>
                    </div>
                </div>
                <div className={styles.activity}>
                    <div>
                        <i className={`ri-price-tag-3-line ${styles["discount-icon"]}`}></i>
                    </div>
                    <div>
                        <p className={styles["activity-title"]}>New discount code created: SPRING25</p>
                        <p className={styles["activity-time"]}>1 hour ago</p>
                    </div>
                </div>
                <div className={styles.activity}>
                    <div>
                        <i className={`ri-box-3-line ${styles["product-icon"]}`}></i>
                    </div>
                    <div>
                        <p className={styles["activity-title"]}>New product added: Echo Quantum Speaker</p>
                        <p className={styles["activity-time"]}>2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}