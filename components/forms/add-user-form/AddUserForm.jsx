import styles from "./AddUserForm.module.css";

export default function AddUserForm({ onClose }) {

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        
        onClose(); 
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <img src="/images/Logo.png" className={styles.logo} />
            </div>
            <h1>Add User</h1>
            <input name="email" type="text" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
                <select name="role" id="role" className={styles["form-select"]} defaultValue="User">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                </select>
            {/* {error && <p>{error}</p>} */}
            <button type="submit" className={styles["create-btn"]}>Create User</button>
        </form>
    );
}
