import styles from "./Newsletter.module.css";

export default function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <img src="https://public.readdy.ai/ai/img_res/4b48fa76a5daae6f6fa0356e0cf819d7.jpg" />
            <div className={styles.container}>
                <h2>Stay Updated with <span>NextGen</span> Tech</h2>
                <p>Subscribe to our newsletter for exclusive deals, new product alerts, and future tech insights.</p>
                <div>
                    <input type="email" placeholder="Enter your email address" />
                    <button>Subscribe</button>
                </div>

                <p>By subscribing, you agree to our Privacy Policy and consent to
                    receive updates from our company.</p>
            </div>
        </section>
    );
}