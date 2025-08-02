"use client";
import styles from "./page.module.css";
import AdminNav from "@/components/admin/admin-nav/AdminNav";
import TotalStats from "@/components/admin/total-stats/TotalStats";
import ActionsAndActivities from "@/components/admin/actions-and-activities/ActionsAndActivities";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "@/components/shared/loading-spinner/LoadingSpinner";
import OrdersAndProducts from "@/components/admin/orders-and-products/OrdersAndProducts";

export default function AdminPage() {
    const { user, loading } = useAuth();

    if(loading) {
       return <LoadingSpinner />;
    }
    

    return (
        <section className={styles.admin}>
            <AdminNav adminName={user?.email} />
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
            <OrdersAndProducts />
            <ActionsAndActivities />
        </section >
    );
}