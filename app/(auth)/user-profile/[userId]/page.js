import styles from "./page.module.css";

export default async function UserProfile({ params }) {

    const { userId } = await params;
    console.log(userId);


    return (
        <>
            <h1>Profile Page</h1>
            <section className={styles["profile-header"]}>
                <div className="avatar-box">
                    <img src="" alt="User Avatar" />
                </div>
                <div className="user-info">
                    <h1>John Doe</h1>
                    <p>Member since January 2025</p>
                </div>
            </section>

            <section className={styles["profile-content"]}>
                <h2>Profile Settings</h2>
                <form action="#" method="post">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" value="John Doe" required />

                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" value="john@example.com" required />

                    <label for="password">Change Password</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" />

                    <button type="submit">Save Changes</button>
                </form>
            </section>
        </>


    )
}