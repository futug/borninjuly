import React from "react";
import styles from "./Sidebar.module.css";
import SocialLink from "../SocialLink/SocialLink";
export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.links}>
                <SocialLink link="https://telegram.me/telegram">Telegram</SocialLink>
                <SocialLink link="https://twitter.com/telegram">Twitter</SocialLink>
                <SocialLink link="https://github.com/telegramdesktop">GitHub</SocialLink>
            </div>
        </aside>
    );
};
