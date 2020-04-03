import React from "react";
import styles from "./HeaderNavigation.module.scss";
import {NavLink} from "react-router-dom";

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to={"/"}>Moje produkty</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to={"/shoppinglist"}>Lista zakupów</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to={"/settings"}>Ustawienia</NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNavigation;