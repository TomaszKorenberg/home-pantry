import React from "react";
import styles from "./DashboardPage.module.scss";
import ItemList from "../../components/ItemList/ItemList";
import AppContext from "../../context";

const DashboardPage = () => (
    <AppContext.Consumer>
        {(context) => (
            <div className={styles.wrapper}>

                <h2>Dashboard</h2>
                <ItemList items={context.items}/>
            </div>
        )}

    </AppContext.Consumer>

);

export default DashboardPage;