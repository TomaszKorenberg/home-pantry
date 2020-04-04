import React from "react";
import styles from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";
import logo from "../../assets/logo.svg";

const Header = () => (
    <div className={styles.wrapper}>
        <img src={logo} alt={"Logo"} className={styles.logo}/>
        <HeaderNavigation/>
    </div>
);

export default Header;