import styles from "./page.module.css";
import AdminNav from "@/components/admin/admin-nav/AdminNav";
import TotalStats from "@/components/admin/total-stats/TotalStats";
import ActionsAndActivities from "@/components/admin/actions-and-activities/ActionsAndActivities";
import { useAuth } from "../context/AuthContext";
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/jwt";

export default async function AdminPage() {

    const token = await cookies().get("token")?.value;
    const user = verifyJWT(token);

    console.log(user);
    

    return (
        <section className={styles.admin}>
            <AdminNav />
            <TotalStats />
            {/* <div className="sales-and-revenue">
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
            <ActionsAndActivities />
        </section >
    );
}