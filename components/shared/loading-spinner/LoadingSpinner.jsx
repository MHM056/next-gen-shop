import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
    return (
        <div className={styles["spinny-loader"]}>
            <div className={styles["spinny-circle"]}></div>
        </div>
    );
}