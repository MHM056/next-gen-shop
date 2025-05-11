import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <div className="logo">
                    <span>Next</span><span>Gen</span>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/collections">Collections</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
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