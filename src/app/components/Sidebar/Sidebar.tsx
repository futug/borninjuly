import React from "react";
import styles from "./Sidebar.module.css";
import Chips from "../Chips/Chips";
export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.links}>
                <Chips link="https://telegram.me/telegram">Telegram</Chips>
                <Chips link="https://twitter.com/telegram">Twitter</Chips>
                <Chips link="https://github.com/telegramdesktop">GitHub</Chips>
            </div>
        </aside>
    );
};
