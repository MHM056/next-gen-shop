import Link from "next/link";
import items from "@/dummy-items";
import ItemCard from "../item-card/ItemCard";
import styles from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
    return (
        <section className={styles["featured-products"]}>
            <div className={styles.top}>
                <h1><span>Featured</span> Products</h1>
                <div>
                    <button className={styles["active-btn"]}>All</button>
                    <button className={styles["inactive-btn"]}>New</button>
                    <button className={styles["inactive-btn"]}>Popular</button>
                </div>
            </div>
            <div className={styles["product-list"]}>
                {items.map((item) => <ItemCard key={item.title} item={item} />)}
            </div>
            <div className={styles["view-products"]}>
                <Link href="/shop"><button>View All Products</button></Link>
            </div>
        </section>
    );
}