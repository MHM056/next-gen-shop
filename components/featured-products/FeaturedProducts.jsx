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
                <div className={styles["product-card"]}>
                    <div>
                        <div className={styles["product-image"]}>
                            <img src="https://public.readdy.ai/ai/img_res/829bcd6e7c09c1ba5ee36d64f192000b.jpg"
                                alt="Quantum Earbuds" />
                        </div>
                        <div>
                            <div>
                                <i className="ri-heart-line text-white"></i>
                            </div>
                            <div>
                                <i className="ri-eye-line text-white"></i>
                            </div>
                        </div>
                        <div className={styles.sticker}>NEW</div>
                    </div>
                    <div>
                        <div className={styles["item-stars"]}>
                            <div className={styles["star-icons"]}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p>(128)</p>
                        </div>
                        <h3>Quantum Earbuds Pro</h3>
                        <p>True wireless with spatial audio and noise cancellation</p>
                        <div>
                            <div className={styles.price}>
                                <span className={styles["current-price"]}>$249.99</span>
                                <span className={styles["previous-price"]}>$299.99</span>
                            </div>
                            <button>
                                <i className="ri-shopping-cart-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles["product-card"]}>
                    <div>
                        <div className={styles["product-image"]}>
                            <img src="https://public.readdy.ai/ai/img_res/bab19f27bb366a49d4071caf9c574811.jpg"
                                alt="Nexus Watch" />
                        </div>
                        <div>
                            <div>
                                <i className="ri-heart-line text-white"></i>
                            </div>
                            <div>
                                <i className="ri-eye-line text-white"></i>
                            </div>
                        </div>
                        {/* <div>NEW</div> */}
                    </div>
                    <div>
                        <div className={styles["item-stars"]}>
                            <div className={styles["star-icons"]}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p>(94)</p>
                        </div>
                        <h3>Nexus Smartwatch X2</h3>
                        <p>Holographic display with health monitoring</p>
                        <div>
                            <div className={styles.price}>
                                <span className={styles["current-price"]}>$399.99</span>
                            </div>
                            <button>
                                <i className="ri-shopping-cart-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles["product-card"]}>
                    <div>
                        <div className={styles["product-image"]}>
                            <img src="https://public.readdy.ai/ai/img_res/1cd5c502d60757d7b9a0ff181d52eee8.jpg"
                                alt="Vortex Controller" />
                        </div>
                        <div>
                            <div>
                                <i className="ri-heart-line text-white"></i>
                            </div>
                            <div>
                                <i className="ri-eye-line text-white"></i>
                            </div>
                        </div>
                        <div className={`${styles.sticker} ${styles.purple}`}>BEST SELLER</div>
                    </div>
                    <div>
                        <div className={styles["item-stars"]}>
                            <div className={styles["star-icons"]}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p>(256)</p>
                        </div>
                        <h3>Vortex Pro Controller</h3>
                        <p>Haptic feedback with customizable RGB lighting</p>
                        <div>
                            <div className={styles.price}>
                                <span className={styles["current-price"]}>$179.99</span>
                                <span className={styles["previous-price"]}>$219.99</span>
                            </div>
                            <button>
                                <i className="ri-shopping-cart-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles["product-card"]}>
                    <div>
                        <div className={styles["product-image"]}>
                            <img src="https://public.readdy.ai/ai/img_res/9be19a26d3db56501ebaeb06250b1884.jpg"
                                alt="Prism AR Glasses" />
                        </div>
                        <div>
                            <div>
                                <i className="ri-heart-line text-white"></i>
                            </div>
                            <div>
                                <i className="ri-eye-line text-white"></i>
                            </div>
                        </div>
                        <div className={styles.sticker}>LIMITED</div>
                    </div>
                    <div>
                        <div className={styles["item-stars"]}>
                            <div className={styles["star-icons"]}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <p>(76)</p>
                        </div>
                        <h3>Prism AR Glasses</h3>
                        <p>Augmented reality with holographic interface</p>
                        <div>
                            <div className={styles.price}>
                                <span className={styles["current-price"]}>$599.99</span>
                            </div>
                            <button>
                                <i className="ri-shopping-cart-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["view-products"]}>
                <button>View All Products</button>
            </div>
        </section>
    );
}