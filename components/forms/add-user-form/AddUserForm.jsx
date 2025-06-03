"use client";
import { createUser } from "@/lib/api/userAuth";
import styles from "./AddUserForm.module.css";
import { useState } from "react";
import validateData from "@/lib/utils/validateData";

export default function AddUserForm({ onClose }) {
    const [error, setError] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const role = formData.get("role");

        try {
            setCreatingUser(true);
            validateData.onAdd({ email, password, role });
            await createUser({ email, password, role });
            onClose();
        } catch (err) {
            setError(err.message);
            setCreatingUser(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <img src="/images/Logo.png" className={styles.logo} />
            </div>
            <h1>Add User</h1>
            <input name="email" type="text" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <select name="role" id="role" className={styles["form-select"]} defaultValue="user">
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
            </select>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles["create-btn"]}>{creatingUser ? "Creating..." : "Create User"}</button>
        </form>
    );
}
