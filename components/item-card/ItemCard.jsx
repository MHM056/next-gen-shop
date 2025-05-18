import styles from "./ItemCard.module.css";

export default function ItemCard({ item, size = "default" }) {
    return (
        <div className={`${styles["product-card"]} ${size === "small" ? styles.small : ""}`}>
            <div>
                <div className={styles["product-image"]}>
                    <img src={item.image}
                        alt={item.title} />
                </div>
                <div>
                    <div>
                        <i className="ri-heart-line text-white"></i>
                    </div>
                    <div>
                        <i className="ri-eye-line text-white"></i>
                    </div>
                </div>
                {item.sticker
                    ? <div className={
                        `${styles.sticker} 
                    ${item.sticker === "BEST SELLER" || item.sticker === "POPULAR" ? styles.purple : ""}`
                    }>
                        {item.sticker}
                    </div>
                    : null
                }
            </div>
            <div>
                <div className={styles["item-stars"]}>
                    <div className={styles["star-icons"]}>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                    </div>
                    <p>{`(${item.previews})`}</p>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div>
                    <div className={styles.price}>
                        <span className={styles["current-price"]}>{`$${item.currentPrice}`}</span>
                        {item.previousPrice
                            ? <span className={styles["previous-price"]}>{`$${item.previousPrice}`}</span>
                            : null
                        }
                    </div>
                    <button>
                        <i className="ri-shopping-cart-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}