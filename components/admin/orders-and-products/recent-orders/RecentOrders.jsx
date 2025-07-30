import styles from "./RecentOrders.module.css";

export default function RecentOrders() {
    return (
        <div className={styles["recent-orders"]}>
            <div className={styles["recent-orders-title"]}>
                <h3>Recent Orders</h3>
                <button>View All</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-7843</td>
                            <td>Emily Parker</td>
                            <td>Quantum Earbuds Pro</td>
                            <td>$249.99</td>
                            <td><span className={`${styles.status} ${styles.completed}`}>Completed</span></td>
                            <td>2025-04-25</td>
                        </tr>
                        <tr>
                            <td>#ORD-7842</td>
                            <td>Michael Chen</td>
                            <td>Vortex Pro Controller</td>
                            <td>$179.99</td>
                            <td>
                                <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                            </td>
                            <td>2025-04-25</td>
                        </tr>
                        <tr>
                            <td>#ORD-7841</td>
                            <td>Sarah Johnson</td>
                            <td>Nexus Smartwatch X2</td>
                            <td>$399.99</td>
                            <td><span className={`${styles.status} ${styles.processing}`}>Processing</span></td>
                            <td>2025-04-24</td>
                        </tr>
                        <tr>
                            <td>#ORD-7840</td>
                            <td>David Wilson</td>
                            <td>Prism AR Glasses</td>
                            <td>$599.99</td>
                            <td><span className={`${styles.status} ${styles.completed}`}>Completed</span></td>
                            <td>2025-04-24</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}