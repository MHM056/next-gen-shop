import styles from "./Modal.module.css";

export default function Modal({ children, onClose }) {
    return (
        <div className={styles["modal-backdrop"]} onClick={onClose}>
            <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}