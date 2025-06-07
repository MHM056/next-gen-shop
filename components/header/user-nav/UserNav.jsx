"use client";
import styles from "./UserNav.module.css";
import SearchContainer from "./search-container/SearchContainer";
import UserContainer from "./user-container/UserContainer";

export default function UserNav() {

    return (
        <div className={styles["user-nav"]}>
            <SearchContainer />
            <UserContainer />
            <div>
                <i className="ri-shopping-cart-line"></i>
                <span>2</span>
            </div>
            <div>
                <i className="ri-heart-line"></i>
            </div>
        </div>
    );
}