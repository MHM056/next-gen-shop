import QuickActions from "@/components/admin/quick-actions/QuickActions";
import styles from "./page.module.css";
import RecentActivities from "@/components/admin/recent-activities/RecentActivities";

export default function AdminPage() {
    return (
        <section className={styles.admin}>
            <nav>
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
            <div>
                <div className={styles["general-view"]}>
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
                {/* <!-- Sales Analytics and Revenue Distributions --> */}
                {/* <div className="sales-revenue">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium">Sales Analytics</h3>
                            <div>
                                <button>Weekly</button>
                                <button>Monthly</button>
                                <button>Yearly</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-lg font-medium">Revenue Distribution</h3>
                            <button className="text-primary hover:text-primary/80 transition-colors">
                                <i className="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                </div> */}

                <div className={styles["orders-and-products"]}>
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
                    <div className={styles["top-products"]}>
                        <div className={styles["top-products-title"]}>
                            <h3>Top Products</h3>
                            <button>View All</button>
                        </div>
                        <div>
                            <div className={styles["item-card"]}>
                                <div className={styles["item-card-name"]}>
                                    <img src="https://readdy.ai/api/search-image?query=futuristic%20wireless%20earbuds%20with%20glowing%20blue%20accents%2C%20floating%20in%20dark%20space%20with%20subtle%20lighting%2C%20ultra%20detailed%20product%20photography%2C%20professional%20studio%20lighting%2C%20dark%20background%2C%20product%20showcase&width=100&height=100&seq=admin1&orientation=squarish&removebg=true"
                                        alt="Product" />
                                    <div>
                                        <h4>Quantum Earbuds Pro</h4>
                                        <p>486 sales</p>
                                    </div>
                                </div>
                                <span>$249.99</span>
                            </div>
                            <div className={styles["item-card"]}>
                                <div className={styles["item-card-name"]}>
                                    <img src="https://readdy.ai/api/search-image?query=futuristic%20gaming%20controller%20with%20glowing%20blue%20accents%20and%20transparent%20elements%2C%20floating%20in%20dark%20space%20with%20subtle%20lighting%2C%20ultra%20detailed%20product%20photography%2C%20professional%20studio%20lighting%2C%20dark%20background%2C%20product%20showcase&width=100&height=100&seq=admin2&orientation=squarish&removebg=true"
                                        alt="Product" />
                                    <div>
                                        <h4>Vortex Pro Controller </h4>
                                        <p>352 sales</p>
                                    </div>
                                </div>
                                <span>$179.99</span>
                            </div>
                            <div className={styles["item-card"]}>
                                <div className={styles["item-card-name"]}>
                                    <img src="https://readdy.ai/api/search-image?query=futuristic%20smartwatch%20with%20holographic%20display%20and%20neon%20blue%20glowing%20accents%2C%20floating%20in%20dark%20space%20with%20subtle%20lighting%2C%20ultra%20detailed%20product%20photography%2C%20professional%20studio%20lighting%2C%20dark%20background%2C%20product%20showcase&width=100&height=100&seq=admin3&orientation=squarish&removebg=true"
                                        alt="Product" />
                                    <div>
                                        <h4>Nexus Smartwatch X2</h4>
                                        <p>298 sales</p>
                                    </div>
                                </div>
                                <span>$399.99</span>
                            </div>
                            <div className={styles["item-card"]}>
                                <div className={styles["item-card-name"]}>
                                    <img src="https://readdy.ai/api/search-image?query=futuristic%20AR%20glasses%20with%20sleek%20design%20and%20blue%20glowing%20elements%2C%20floating%20in%20dark%20space%20with%20subtle%20lighting%2C%20ultra%20detailed%20product%20photography%2C%20professional%20studio%20lighting%2C%20dark%20background%2C%20product%20showcase&width=100&height=100&seq=admin4&orientation=squarish&removebg=true"
                                        alt="Product" />
                                    <div>
                                        <h4>Prism AR Glasses</h4>
                                        <p>245 sales</p>
                                    </div>
                                </div>
                                <span>$599.99</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["actions-and-activities"]}>
                    <QuickActions />
                    <RecentActivities />
                </div>
            </div>
        </section >
    );
}