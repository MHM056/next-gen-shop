import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <span>N</span><span>G</span>
                </div>
                <ul className={styles.ul}>
                    <li><a className={styles.a} href="/">Home</a></li>
                    <li><a className={styles.a} href="/shop">Shop</a></li>
                    <li><a className={styles.a} href="/collections">Collections</a></li>
                    <li><a className={styles.a} href="/about">About</a></li>
                    <li><a className={styles.a} href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className={styles["user-nav"]}>
                <div className={styles["search-container"]}>
                    <input type="text" placeholder="Search products..." className={styles["search-input"]} />
                    <i className={`ri-search-line ${styles["search-icon"]} ${styles.i}`}></i>
                </div>
                <div>
                    <i className={`ri-user-line ${styles.i}`}></i>
                    <span>1</span>
                </div>
                <div>
                    <i className={`ri-shopping-cart-line ${styles.i}`}></i>
                    <span>2</span>
                </div>
                <div>
                    <i className={`ri-heart-line ${styles.i}`}></i>
                </div>
            </div>
        </header>
    );
}