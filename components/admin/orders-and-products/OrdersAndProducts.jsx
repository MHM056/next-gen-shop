import styles from "./OrdersAndProducts.module.css";
import RecentOrders from "./recent-orders/RecentOrders";
import TopProducts from "./top-products/TopProducts";

export default function OrdersAndProducts() {
    return (
        <div className={styles["orders-and-products"]}>
            <RecentOrders />
            <TopProducts />
        </div>
    );
}