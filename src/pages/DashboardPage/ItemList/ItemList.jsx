import React from "react";
import styles from "./ItemList.module.scss";
import editIcon from "../../../assets/edit-icon.png"
import deleteIcon from "../../../assets/delete-icon.png"

const ItemList = ({items}) => (
    <table>
        <thead>
        <tr>
            <th>Lp.</th>
            <th>Nazwa</th>
            <th>Ilość</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>
                        <button className={styles.button}>
                            <img className={styles.icon} alt={"edit"} src={editIcon}/>
                        </button>
                        <button className={styles.button}>
                            <img className={styles.icon} alt={"delete"} src={deleteIcon}/>
                        </button>
                    </td>
                </tr>
            )
        )}
        </tbody>

    </table>
);

export default ItemList;