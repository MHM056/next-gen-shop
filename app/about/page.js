import styles from "./page.module.css";

export default function About() {
    return (
        <>
            <section className={styles["hero-section"]}>
                <div className={styles["overlay"]}></div>
                <div className={styles["container"]}>
                    <h1 className={styles["hero-title"]}>About <span className={styles["gradient-text"]}>NextGen Shop</span></h1>
                    <p className={styles["hero-subtitle"]}>We're pioneering the future of e-commerce—where cutting-edge design meets seamless experience.</p>
                </div>
            </section>

            <section className={styles["info-section"]}>
                <div className={`${styles.container} ${styles["two-columns"]}`}>
                    <div className={styles["glass-box"]}>
                        <h2 className={`${styles["section-title"]} ${styles["gradient-text"]}`}>Our Mission</h2>
                        <p>To empower every shopper with tomorrow's technology, today. We bring you an immersive, futuristic shopping experience—backed by neon-bright design and glassmorphic interfaces that feel like science fiction come alive.</p>
                    </div>
                    <div className={styles["glass-box"]}>
                        <h2 className={`${styles["section-title"]} ${styles["gradient-text"]}`}>Our Vision</h2>
                        <p>To redefine how people discover, explore, and buy products—melding augmented reality, data-driven insights, and community engagement for a truly next-generation marketplace.</p>
                    </div>
                </div>
            </section>

            <section className={styles["team-section"]}>
                <div className={styles["container"]}>
                    <h3 className={`${styles["section-title"]} ${styles["gradient-text"]} ${styles["center"]}`}>Meet the Team</h3>
                    <p className={`${styles.subtitle} ${styles.center}`}>A group of innovators, designers, and tech enthusiasts.</p>
                    <div className={styles["team-grid"]}>
                        <div className={`${styles["team-member"]} ${styles["glass-box"]}`}>
                            <img src="images/team/member.png" alt="Alex Nova" />
                            <h4>Alex Nova</h4>
                            <p className={styles["role"]}>Founder & CEO</p>
                            <p>Visionary leading our journey toward the future of shopping.</p>
                        </div>
                        <div className={`${styles["team-member"]} ${styles["glass-box"]}`}>
                            <img src="images/team/member.png" alt="Jordan Tech" />
                            <h4>Jordan Tech</h4>
                            <p className={styles["role"]}>CTO</p>
                            <p>Architect of our AR and data-analytics platforms.</p>
                        </div>
                        <div className={`${styles["team-member"]} ${styles["glass-box"]}`}>
                            <img src="images/team/member.png" alt="Sam Prism" />
                            <h4>Sam Prism</h4>
                            <p className={styles["role"]}>Design Lead</p>
                            <p>Crafts the neon-glow, glassmorphic UI that defines our look.</p>
                        </div>
                        <div className={`${styles["team-member"]} ${styles["glass-box"]}`}>
                            <img src="images/team/member.png" alt="Taylor Wave" />
                            <h4>Taylor Wave</h4>
                            <p className={styles["role"]}>Head of Marketing</p>
                            <p>Spreads our vision across communities worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}