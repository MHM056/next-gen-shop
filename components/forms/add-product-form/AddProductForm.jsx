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
        const email = formData.get("email");
        const password = formData.get("password");
        const role = formData.get("role");

        try {
            setCreatingProduct(true);
            validateData.onAdd({ email, password, role });
            await createUser({ email, password, role });
            onClose();
        } catch (err) {
            setError(err.message);
            setCreatingProduct(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <img src="/images/Logo.png" className={styles.logo} />
            </div>
            <h1>Add Product</h1>
            <div className={styles["item-info"]}>
                <input name="title" type="text" placeholder="Title" required />
                <input name="brand" type="text" placeholder="Brand" required />
                <select name="category" id="category" className={styles["form-select"]} placeholder="Category">
                    <option value="headphones">Headphones</option>
                    <option value="earbuds">Earbuds</option>
                    <option value="speakers">Speakers</option>
                    <option value="microphones">Microphones</option>
                    <option value="accessories">Accessories</option>
                </select>
                <select name="feature" id="feature" className={styles["form-select"]} placeholder="Feature">
                    <option value="wireless">Wireless</option>
                    <option value="noise cancellation">Noise Cancellation</option>
                    <option value="voice assistant">Voice Assistant</option>
                    <option value="water resistant">Water Resistant</option>
                </select>
                <textarea name="description" id="description"></textarea>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles["create-btn"]}>{creatingProduct ? "Adding..." : "Add Product"}</button>
        </form>
    );
}
