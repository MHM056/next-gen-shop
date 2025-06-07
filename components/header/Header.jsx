import styles from "./Header.module.css";
import NavLink from "./Navlink";
import UserNav from "./user-nav/UserNav";

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
            <UserNav />
        </header>
    );
}