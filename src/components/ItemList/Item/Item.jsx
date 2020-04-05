import React from "react";
import styles from "./Item.module.scss";
import editIcon from "../../../assets/edit-icon.png";
import deleteIcon from "../../../assets/delete-icon.png";
import AppContext from "../../../context";

const Item = ({item, itemIndex}) => (
    <AppContext.Consumer>
        {(context) => (<tr>
        <td>{itemIndex + 1}</td>
        <td>{item.name}</td>
        <td>{item.count}</td>
        <td>
            <button className={styles.button}>
                <img className={styles.buttonIcon} alt={"edit"} onClick={() => (context.openModalFn(item))} src={editIcon}/>
            </button>
            <button className={styles.button}>
                <img className={styles.buttonIcon} alt={"delete"} onClick={() => (context.removeItemFn(item))} src={deleteIcon}/>
            </button>
        </td>
    </tr>)}
    </AppContext.Consumer>
);

export default Item;