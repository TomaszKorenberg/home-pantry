import React from "react";
import styles from "./Modal.module.scss";
import closeBttn from "../../assets/cancel-icon.png"
import Form from "../Form/Form";
import confirmButton from "../../assets/accept-button.png"
import cancelButton from "../../assets/cancel2-icon.png"


const Modal = ({closeModalFn, editItemData, removeItemData, addItemData, removeItemFn, updateItemFn,  ...props}) => (
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
            <Form props={editItemData}/>
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
            <div className={styles.buttonWrapper}>

            <button className={styles.buttonConfirm}
                    onClick={() => removeItemFn(removeItemData)}>
                <img className={styles.buttonConfirmIcon}
                     src={confirmButton}/>
            </button>

            <button className={styles.buttonConfirm}
                    onClick={closeModalFn}>
                <img className={styles.buttonConfirmIcon}
                     src={cancelButton}/>
            </button>
            </div>
        </div>)}

        {addItemData && (
            <div className={styles.wrapper}>
                <button className={styles.button}
                        onClick={closeModalFn}>
                    <img alt={"close"}
                         src={closeBttn}
                         className={styles.buttonIcon}/>
                </button>
                Dodaj nowy produkt:
                <br/>
                <Form/>

            </div>
            )}



    </>
);

export default Modal;