import React from "react";
import Item from "./Item/Item";

const ItemList = ({shoppingList, items}) => (
    <>
        {items && (
            <table>
                <thead>
                <tr>
                    <th>Lp.</th>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (<Item key={"product_no_" + index + 1} item={item} itemIndex={index}/>))}
                </tbody>

            </table>
        )}

        {shoppingList && (
            <div>Kup to:
                {shoppingList.map((item, index) => ((item.count >= item.minCount) ? <li key={"buy_product_" + index}>{item.name}</li> : null))}
            </div>
        )}
    </>
);

export default ItemList;