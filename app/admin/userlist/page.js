"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/api/userAuth";
import { formatDate, upperCase } from "@/lib/utils/formatData";
import LoadingSpinner from "@/components/shared/loading-spinner/LoadingSpinner";

export default function UserList() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await getUsers();
                setUserData(users);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.userlist}>
            <h1>Userlist</h1>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                        <th>Profile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {loading
                        ? (
                            <tr>
                                <td colSpan={5}>
                                    <LoadingSpinner />
                                </td>
                            </tr>
                        )
                        : (
                            userData.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.email}</td>
                                    <td>{upperCase(user.role)}</td>
                                    <td>{formatDate(user.createdAt)}</td>
                                    <td>
                                        <Link href={`/profile/${user._id}`}>View</Link>
                                    </td>
                                    <td>
                                        <button className={styles["edit-btn"]}>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
