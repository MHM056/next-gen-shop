import styles from "./page.module.css";

export default function UserList() {
    return (
        <div className={styles.userlist}>
            <h1>Userlist</h1>

            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Rank</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#ORD-7843</td>
                        <td>Emily Parker</td>
                        <td>Quantum Earbuds Pro</td>
                        <td>$249.99</td>
                        <td><span>Completed</span></td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}