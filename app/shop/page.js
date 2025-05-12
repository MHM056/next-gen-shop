"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Shop() {
    const [price, setPrice] = useState(500);

    return (
        <section className={styles["all-products"]}>
            {/* <!-- Filter Sidebar --> */}
            <div className={styles["sidebar"]}>
                <div className={styles["filters"]}>
                    <h3>Filters</h3>
                    <div className={styles["price-slider"]}>
                        <h4>Price Range</h4>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className={styles["range-input"]} />
                        <div className={styles["price-range"]}>
                            <span>$0</span>
                            <span>$500</span>
                            <span>$1000</span>
                        </div>
                    </div>
                </div>
                <div className="categories">
                    <h4>Categories</h4>
                    <div>
                        <div>
                            <input type="checkbox" id="cat1" className={styles.checkbox} />
                            <label htmlFor="cat1">Headphones (24)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cat2"  className={styles.checkbox} />
                            <label htmlFor="cat2">Earbuds (18)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cat3" className={styles.checkbox} />
                            <label htmlFor="cat3">Speakers (16)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cat4" className={styles.checkbox} />
                            <label htmlFor="cat4">Microphones (9)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cat5" className={styles.checkbox} />
                            <label htmlFor="cat5">Accessories (32)</label>
                        </div>
                    </div>
                </div>
                <div className="brands">
                    <h4>Brands</h4>
                    <div>
                        <div>
                            <input type="checkbox" id="brand1"  className={styles.checkbox} />
                            <label htmlFor="brand1">Quantum (12)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="brand2" className={styles.checkbox} />
                            <label htmlFor="brand2">Nexus (9)</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="brand3" className={styles.checkbox} />
                            <label htmlFor="brand3">Vortex (14)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="brand4" className={styles.checkbox} />
                            <label htmlFor="brand4">Nova (8)</label>
                        </div>
                        <div>
                            <input type="checkbox" id="brand5" className={styles.checkbox} />
                            <label htmlFor="brand5">Prism (6)</label>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <h4>Features</h4>
                    <div>
                        <div>
                            <input type="checkbox" id="feature1"  className={styles.checkbox} />
                            <label htmlFor="feature1">Wireless</label>
                        </div>
                        <div>
                            <input type="checkbox" id="feature2"  className={styles.checkbox} />
                            <label htmlFor="feature2">Noise Cancellation</label>
                        </div>
                        <div>
                            <input type="checkbox" id="feature3" className={styles.checkbox} />
                            <label htmlFor="feature3">Voice Assistant</label>
                        </div>
                        <div>
                            <input type="checkbox" id="feature4" className={styles.checkbox} />
                            <label htmlFor="feature4">Water Resistant</label>
                        </div>
                    </div>
                </div>
                <div className={styles["filter-btns"]}>
                    <button className={styles["apply-btn"]}>Apply</button>
                    <button className={styles["reset-btn"]}>Reset</button>
                </div>
            </div>
            {/* <!-- Products Grid --> */}
            <div className={styles["products-grid"]}>
                <div className={styles["grid-header"]}>
                    <h2>All Products <span>(48)</span></h2>
                    <div className={styles["ui-actions"]}>
                        <div className={styles["sort-select"]}>
                            <select>
                                <option>Sort by: Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                                <option>Best Rated</option>
                            </select>
                            <i className="ri-arrow-down-s-line"></i>
                        </div>

                        <div className={styles["layout-toggle"]}>
                            <button><i className="ri-layout-grid-line"></i></button>
                            <button><i className="ri-list-check"></i></button>
                        </div>

                        <button className={styles["login-btn"]}>
                            <i className="ri-login-circle-line"></i> Login
                        </button>
                    </div>
                </div>

                <div className={styles["product-section"]}>
                    <div className={styles.compact}>
                        <div>
                            <div className={styles["product-image"]}>
                                <img src="https://public.readdy.ai/ai/img_res/1751672930ac06d29d69edf72b188796.jpg"
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
                            <div className="sticker">NEW</div>
                        </div>
                        <div>
                            <div className="item-stars">
                                <div className="star-icons">
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
                                <div className="price">
                                    <span className="current-price">$249.99</span>
                                    <span className="previous-price">$299.99</span>
                                </div>
                                <button>
                                    <i className="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card compact">
                        <div>
                            <div className="product-image">
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
                            {/* <!-- <div>NEW</div> --> */}
                        </div>
                        <div>
                            <div className="item-stars">
                                <div className="star-icons">
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
                                <div className="price">
                                    <span className="current-price">$399.99</span>
                                </div>
                                <button>
                                    <i className="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["product-card"]} ${styles.compact}`}>
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
                                <div className={styles["price"]}>
                                    <span className={styles["current-price"]}>$179.99</span>
                                    <span className={styles["previous-price"]}>$219.99</span>
                                </div>
                                <button>
                                    <i className="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card compact">
                        <div>
                            <div className="product-image">
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
                            <div className="sticker">LIMITED</div>
                        </div>
                        <div>
                            <div className="item-stars">
                                <div className="star-icons">
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
                                <div className="price">
                                    <span className="current-price">$599.99</span>
                                </div>
                                <button>
                                    <i className="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card compact">
                        <div>
                            <div className="product-image">
                                <img src="https://public.readdy.ai/ai/img_res/e75b8b0f83b4645838809162da803e75.jpg"
                                    alt="Echo Speaker" />
                            </div>
                            <div>
                                <div>
                                    <i className="ri-heart-line text-white"></i>
                                </div>
                                <div>
                                    <i className="ri-eye-line text-white"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item-stars">
                                <div className="star-icons">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <p>(89)</p>
                            </div>
                            <h3>Echo Quantum Speaker</h3>
                            <p>360° spatial audio with voice control</p>
                            <div>
                                <div className="price">
                                    <span className="current-price">$199.99</span>
                                    <span className="previous-price">$249.99</span>
                                </div>
                                <button>
                                    <i className="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card compact">
                        <div>
                            <div className="product-image">
                                <img src="https://public.readdy.ai/ai/img_res/bdd7a8f163a2826e991ddaedf74286a8.jpg"
                                    alt="Vortex Mouse" />
                            </div>
                            <div>
                                <div>
                                    <i className="ri-heart-line text-white"></i>
                                </div>
                                <div>
                                    <i className="ri-eye-line text-white"></i>
                                </div>
                            </div>
                            <div className="sticker purple">POPULAR</div>
                        </div>
                        <div>
                            <div className="item-stars">
                                <div className="star-icons">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </div>
                                <p>(112)</p>
                            </div>
                            <h3>Vortex Precision Mouse</h3>
                            <p>16K DPI with customizable weights</p>
                            <div>
                                <div className="price">
                                    <span className="current-price">$129.99</span>
                                </div>
                                <button>
                                    <i className="ri-shopping-cart-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Pagination --> */}
                <div className="pagination">
                    <div>
                        <button><i className="ri-arrow-left-s-line"></i></button>
                        <button className="selected-page">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button><i className="ri-more-line"></i></button>
                        <button>8</button>
                        <button><i className="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
}