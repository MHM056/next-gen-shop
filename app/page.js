import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Newsletter from "@/components/newsletter/Newsletter";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Image
                    fill
                    unoptimized
                    className={styles["main-background"]}
                    src="/images/background.jpg"
                    alt="Main Background"
                />
                <div className={styles.description}>
                    <h1>The Future of</h1>
                    <h1 className={styles["shopping-text"]}>Shopping</h1>
                    <h1>Is Here</h1>
                    <p>Experience next-generation e-commerce with our futuristic platform. Discover products that define
                        tomorrow, today.
                    </p>
                    <Link href="/shop" className={styles["cyan-btn"]}>Shop Now</Link>
                    <Link href="/explore" className={styles["explore-btn"]}>Explore AR</Link>
                </div>
                <div className={styles["item-preview"]}>
                    <Image
                        width={50}
                        height={50}
                        unoptimized
                        className={styles["preview-image"]}
                        src="/images/headphones.jpg"
                        alt="Futuristic Headphones"
                    />
                </div>
            </main>
            <FeaturedProducts />
            <Newsletter />
        </>
    );
}
