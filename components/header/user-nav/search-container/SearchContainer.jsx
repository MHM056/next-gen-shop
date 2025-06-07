import styles from "./SearchContainer.module.css";

export default function SearchContainer() {
    return (
        <div className={styles["search-container"]}>
            <input type="text" placeholder="Search products..." />
            <i className="ri-search-line"></i>
        </div>
    );
}