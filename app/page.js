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
                    className={styles["main-background"]}
                    src="https://public.readdy.ai/ai/img_res/1cd20f210a7471c9605fadedb9502475.jpg"
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
                    <a href="/explore" className={styles["explore-btn"]}>Explore AR</a>
                </div>
                <div className={styles["item-preview"]}>
                    <Image
                        width={50}
                        height={50}
                        unoptimized
                        className={styles["preview-image"]}
                        src="https://public.readdy.ai/ai/img_res/a8dc01dfcfc98e07358a749458fa22b7.jpg"
                        alt="Futuristic Headphones"
                    />
                </div>
            </main>
            <FeaturedProducts />
            <Newsletter />
        </>
    );
}
