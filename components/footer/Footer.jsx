import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.section}>
                <div className={styles.links}>
                    <div className={styles.logo}>
                        <span>N</span><span>G</span>
                    </div>
                    <p className={styles["footer-p"]}>Experience the future of technology with our next-generation products designed for the modern
                        lifestyle.
                    </p>
                    <a><i className={`ri-facebook-fill ${styles.icon}`}></i></a>
                    <a><i className={`ri-twitter-x-line ${styles.icon}`}></i></a>
                    <a><i className={`ri-instagram-fill ${styles.icon}`}></i></a>
                    <a><i className={`ri-youtube-fill ${styles.icon}`}></i></a>
                </div>
                <div className={styles.shop}>
                    <h1 className={styles["footer-h1"]}>Shop</h1>
                    <ul>
                        <li className={styles["listed-item"]}>All Products</li>
                        <li className={styles["listed-item"]}>Featured Items</li>
                        <li className={styles["listed-item"]}>New Arrivals</li>
                        <li className={styles["listed-item"]}>Special Offers</li>
                        <li className={styles["listed-item"]}>Coming Soon</li>
                    </ul>
                </div>
                <div className={styles["customer-service"]}>
                    <h1 className={styles["footer-h1"]}>Customer Service</h1>
                    <ul>
                        <li className={styles["listed-item"]}>Contact Us</li>
                        <li className={styles["listed-item"]}>FAQs</li>
                        <li className={styles["listed-item"]}>Shipping Policy</li>
                        <li className={styles["listed-item"]}>Returns & Exchanges</li>
                        <li className={styles["listed-item"]}>Warranty Information</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h1 className={styles["footer-h1"]}>Contact</h1>
                    <ul>
                        <li className={styles["listed-item"]}><i className={`ri-map-pin-line ${styles["contact-icon"]}`}></i>123 Future Avenue, Tech District, CA 90210, US</li>
                        <li className={styles["listed-item"]}><i className={`ri-phone-line ${styles["contact-icon"]}`}></i>+1 (800) 123-4567</li>
                        <li className={styles["listed-item"]}><i className={`ri-mail-line ${styles["contact-icon"]}`}></i>support@nextgenshop.com</li>
                        <li className={styles["listed-item"]}><i className={`ri-timer-2-line ${styles["contact-icon"]}`}></i>24/7 Customer Support</li>
                    </ul>
                </div>
            </section>
            <br />
            <div className={styles.rights}>
                <p className="copyright">© 2025 NextGen Shop. All rights reserved.</p>
                <ul>
                    <li className={styles["listed-item"]}><i className={`ri-visa-fill`}></i>Visa</li>
                    <li className={styles["listed-item"]}><i className={`ri-mastercard-fill ${styles.icon}`}></i>Mastercard</li>
                    <li className={styles["listed-item"]}><i className={`ri-paypal-fill ${styles.icon}`}></i>PayPal</li>
                    <li className={styles["listed-item"]}><i className={`ri-apple-fill ${styles.icon}`}></i>Apple Pay</li>
                    <li className={styles["listed-item"]}><i className={`ri-google-fill ${styles.icon}`}></i>Google Pay</li>
                </ul>
            </div>
        </footer>
    );
}