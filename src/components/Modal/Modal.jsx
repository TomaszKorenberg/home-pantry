import React from "react";
import styles from "./Modal.module.scss";
import closeBttn from "../../assets/cancel-icon.png"

const Modal = ({closeModalFn, editItemData, removeItemData, updateItem, ...props}) => (
    <>
        {editItemData &&
        (<div className={styles.wrapper}>
           Edycja artykułu {editItemData.name}
            <button className={styles.button}
                    onClick={closeModalFn}>
                <img alt={"close"}
                     src={closeBttn}
                     className={styles.buttonIcon}/>
            </button>

            <br/>
            <input/>
            <input/>
            <button onClick={() => (updateItem(editItemData))}>Aktualizuj</button>
        </div>)
        }
        {removeItemData &&
        (<div className={styles.wrapper}>
            Czy na pewno chcesz usunąć {removeItemData.name}?
            <button className={styles.button}
                    onClick={closeModalFn}>
                <img alt={"close"}
                     src={closeBttn}
                     className={styles.buttonIcon}/>
            </button>

            <br/>
            <button>Tak</button>
            <button>Nie</button>
        </div>)}


    </>
);

export default Modal;