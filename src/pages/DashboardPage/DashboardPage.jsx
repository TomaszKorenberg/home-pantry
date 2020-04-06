import React from "react";
import styles from "./DashboardPage.module.scss";
import ItemList from "../../components/ItemList/ItemList";
import AppContext from "../../context";
import addButton from "../../assets/add-button.svg"

const DashboardPage = () => (
    <AppContext.Consumer>
        {(context) => (
            <div className={styles.wrapper}>

                <h2>Dashboard</h2>
                <ItemList items={context.items}/>

                <br/>

                {//todo: Dodać zielony przycisk +, po najechaniu ma się obrócić i poniejszeći powiekszyć (jak kliknięcie)//
                }
                <button onClick={() =>context.openModalFn("add","Daneproduktu test")} className={styles.addButton}>Dodaj produkt<img src={addButton} alt={"add-button"} className={styles.addButtonImage}/></button>
            </div>
        )}
    </AppContext.Consumer>

);

export default DashboardPage;