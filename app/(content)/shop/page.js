"use client";
import { useState } from "react";
import styles from "./page.module.css";
import allItems from "@/dummy-content/all-items";
import ItemCard from "@/components/item-card/ItemCard";

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
                            <input type="checkbox" id="cat2" className={styles.checkbox} />
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
                            <input type="checkbox" id="brand1" className={styles.checkbox} />
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
                            <input type="checkbox" id="feature1" className={styles.checkbox} />
                            <label htmlFor="feature1">Wireless</label>
                        </div>
                        <div>
                            <input type="checkbox" id="feature2" className={styles.checkbox} />
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
                        {!user && (
                            <button className={styles["login-btn"]}>
                                <i className="ri-login-circle-line"></i> Login
                            </button>
                        )}
                    </div>
                </div>

                <div className={styles["product-section"]}>
                    {allItems.map((item) => <ItemCard key={item.title} item={item} size="small" />)}
                </div>
                {/* <!-- Pagination --> */}
                <div className={styles.pagination}>
                    <div>
                        <button><i className="ri-arrow-left-s-line"></i></button>
                        <button className={styles["selected-page"]}>1</button>
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