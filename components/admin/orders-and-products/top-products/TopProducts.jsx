import styles from "./TopProducts.module.css";

export default function TopProducts() {
    return (
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
    );
}