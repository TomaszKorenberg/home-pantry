import React from "react";
import AppContext from "../../context";
import styles from "../DashboardPage/DashboardPage.module.scss";
import ItemList from "../../components/ItemList/ItemList";

const ShoppingListPage = () => (
    <AppContext.Consumer>
        {(context) => (
            <div className={styles.wrapper}>

                <h2>Lista zakupów</h2>
                <ItemList shoppingList={context.items}/>

            </div>
        )}

    </AppContext.Consumer>
);

export default ShoppingListPage;