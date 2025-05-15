import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.section}>
                <div className={styles.links}>
                    <div className="logo">
                        <span>Next</span><span>Gen</span>
                    </div>
                    <p>Experience the future of technology with our next-generation products designed for the modern
                        lifestyle.
                    </p>
                    <a><i className={`ri-facebook-fill ${styles.icon}`}></i></a>
                    <a><i className={`ri-twitter-x-line ${styles.icon}`}></i></a>
                    <a><i className={`ri-instagram-fill ${styles.icon}`}></i></a>
                    <a><i className={`ri-youtube-fill ${styles.icon}`}></i></a>
                </div>
                <div className={styles.shop}>
                    <h1>Shop</h1>
                    <ul>
                        <li><Link href="/shop" className={styles.link}>All Products</Link></li>
                        <li>Featured Items</li>
                        <li>New Arrivals</li>
                        <li>Special Offers</li>
                        <li>Coming Soon</li>
                    </ul>
                </div>
                <div className={styles["customer-service"]}>
                    <h1>Customer Service</h1>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Shipping Policy</li>
                        <li>Returns & Exchanges</li>
                        <li>Warranty Information</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h1>Contact</h1>
                    <ul>
                        <li><i className="ri-map-pin-line"></i>123 Future Avenue, Tech District, CA 90210, US</li>
                        <li><i className="ri-phone-line"></i>+1 (800) 123-4567</li>
                        <li><i className="ri-mail-line"></i>support@nextgenshop.com</li>
                        <li><i className="ri-timer-2-line"></i>24/7 Customer Support</li>
                    </ul>
                </div>
            </section>
            <br />
            <div className={styles.rights}>
                <p>© 2025 NextGen Shop. All rights reserved.</p>
                <ul>
                    <li><i className="ri-visa-fill"></i>Visa</li>
                    <li><i className="ri-mastercard-fill"></i>Mastercard</li>
                    <li><i className="ri-paypal-fill"></i>PayPal</li>
                    <li><i className="ri-apple-fill"></i>Apple Pay</li>
                    <li><i className="ri-google-fill"></i>Google Pay</li>
                </ul>
            </div>
        </footer>
    );
}