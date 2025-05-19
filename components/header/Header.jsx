import Link from "next/link";
import styles from "./Header.module.css";
import NavLink from "./Navlink";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <div className="logo">
                    <span>Next</span><span>Gen</span>
                </div>
                <ul>
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/shop">Shop</NavLink></li>
                    <li><NavLink href="/collections">Collections</NavLink></li>
                    <li><NavLink href="/about">About</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className={styles["user-nav"]}>
                <div className={styles["search-container"]}>
                    <input type="text" placeholder="Search products..." />
                    <i className="ri-search-line"></i>
                </div>
                <div>
                    <i className="ri-user-line"></i>
                    <span>1</span>
                </div>
                <div>
                    <i className="ri-shopping-cart-line"></i>
                    <span>2</span>
                </div>
                <div>
                    <i className="ri-heart-line"></i>
                </div>
            </div>
        </header>
    );
}