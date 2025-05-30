import styles from "./TotalStats.module.css";

export default function TotalStats() {
    return (
        <div className={styles["total-stats"]}>
            <div className={styles["total-card"]}>
                <div>
                    <h3>Total Sales</h3>
                    <i className="ri-money-dollar-circle-line ri-2x"></i>
                </div>
                <p className={styles["total-sum"]}>$124,563</p>
                <p className={styles["sum-details"]}>+12.5% from last month</p>
            </div>
            <div className={styles["total-card"]}>
                <div>
                    <h3>Total Orders</h3>
                    <i className="ri-shopping-cart-line text-primary ri-2x"></i>
                </div>
                <p className={styles["total-sum"]}>1,432</p>
                <p className={styles["sum-details"]}>+8.2% from last month</p>
            </div>
            <div className={styles["total-card"]}>
                <div>
                    <h3 className="text-lg font-medium">Total Products</h3>
                    <i className="ri-box-3-line text-primary ri-2x"></i>
                </div>
                <p className={styles["total-sum"]}>286</p>
                <p className={styles["sum-details"]}>+15 new products</p>
            </div>
            <div className={styles["total-card"]}>
                <div>
                    <h3>Total Users</h3>
                    <i className="ri-group-line text-primary ri-2x"></i>
                </div>
                <p className={styles["total-sum"]}>8,549</p>
                <p className={styles["sum-details"]}>+5.3% from last month</p>
            </div>
        </div>
    );
}