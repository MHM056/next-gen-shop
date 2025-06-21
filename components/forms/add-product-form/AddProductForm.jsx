"use client";
import { createUser } from "@/lib/api/userAuth";
import styles from "./AddProductForm.module.css";
import { useState } from "react";
import validateData from "@/lib/utils/validateData";

export default function AddProductForm({ onClose }) {
    const [error, setError] = useState('');
    const [creatingProduct, setCreatingProduct] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const itemData = {
            title: formData.get("title"),
            description: formData.get("description"),
            brand: formData.get("brand"),
            category: formData.get("category"),
            feature: formData.get("feature"),
            color: formData.get("color"),
            price: formData.get("price"),
            discount: formData.get("discount"),
            quantity: formData.get("quantity"),
            image: formData.get("image"),
            isFeatured: formData.get("isFeatured")
        }
        
        
        try {
            // setCreatingProduct(true);
            // validateData.onAdd({ email, password, role });
            // await createUser({ email, password, role });
            // onClose();
        } catch (err) {
            // setError(err.message);
            // setCreatingProduct(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <img src="/images/Logo.png" className={styles.logo} />
            </div>
            <h1>Add Product</h1>
            <div className={styles["item-info"]}>
                <div className={styles["main-info"]}>
                    <input name="title" type="text" placeholder="Title" required />
                    <input name="brand" type="text" placeholder="Brand" required />
                    <input name="quantity" type="number" placeholder="Quantity" min={1} max={100} required />
                    <input name="price" type="number" placeholder="Price" min={10} max={9000} required />
                    <div className={styles["select-container"]}>
                        <div className={styles.select}>
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" className={styles["form-select"]} placeholder="Category" required>
                                <option value="headphones">Headphones</option>
                                <option value="earbuds">Earbuds</option>
                                <option value="speakers">Speakers</option>
                                <option value="microphones">Microphones</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>
                        <div className={styles.select}>
                            <label htmlFor="feature">Feature</label>
                            <select name="feature" id="feature" className={styles["form-select"]} placeholder="Feature" required>
                                <option value="wireless">Wireless</option>
                                <option value="noise cancellation">Noise Cancellation</option>
                                <option value="voice assistant">Voice Assistant</option>
                                <option value="water resistant">Water Resistant</option>
                            </select>
                        </div>
                        <div className={styles.select}>
                            <label htmlFor="label">Color</label>
                            <select name="color" id="color" className={styles["form-select"]}>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                            </select>
                        </div>
                    </div>
                    <input name="image" type="text" placeholder="Image" required />
                    <input name="discount" type="number" placeholder="Discount %" min={10} max={80} />
                    <div className={styles.isFeatured}>
                        <input name="isFeatured" id="isFeatured" type="checkbox" className={styles.checkbox} />
                        <label htmlFor="isFeatured">Is Featured?</label>
                    </div>
                </div>

                <textarea name="description" id="description" placeholder="Description" required></textarea>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles["create-btn"]}>{creatingProduct ? "Adding..." : "Add Product"}</button>
        </form>
    );
}
