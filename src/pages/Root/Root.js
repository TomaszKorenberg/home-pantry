import React from 'react';
import './Root.module.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DashboardPage from "../DashboardPage/DashboardPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import ShoppingListPage from "../ShoppingListPage/ShoppingListPage";
import AppContext from "../../context";
import Modal from "../../components/Modal/Modal";


class Root extends React.Component {


    state = {
        isModalOpen: false,
        editItemData: null,
        removeItemData: null,
        addItemData: false,
        items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
            editItemData: null,
            removeItemData: null,
            addItemData: false
        })
    };

    openModal = (task, itemData) => {
        this.setState({isModalOpen: true});
        switch (task) {
            case "update":
                this.setState({editItemData: itemData});
                break;
            case "remove":
                this.setState({removeItemData: itemData});
                break;
            case "add":
                this.setState({addItemData: true});
                break;
        }

    };

    removeItem = (itemData) => {
        const items = JSON.parse(localStorage.getItem("items")).filter(item => item.name !== itemData.name);
        localStorage.setItem("items", JSON.stringify(items));
        this.setState({"items": items})
        this.closeModal();
    };

    updateItem = (e,itemData, newItemValues) => {
        e.preventDefault();
        console.log("Update FN");

        const updateItemIndex = this.state.items.findIndex(key => key.name === itemData.name);
        const updatedItem = [...this.state.items];
        //console.log(updatedItem[updateItemIndex])

        updatedItem[updateItemIndex] = {
            name: !newItemValues ? itemData.name : newItemValues.name,
            count: !newItemValues ? itemData.count : newItemValues.count,
            minCount: !newItemValues ? itemData.minCount : newItemValues.minCount
        }
        //console.log(updatedItem[updateItemIndex])
        console.log(itemData.name)
        console.log(newItemValues.name)



        //console.log(this.state.items[updateItemIndex])

        // const updatedItems = [...this.state.items[updateItemIndex], itemData];

        // this.setState(prevState => ({"items": updatedItems }));
        // localStorage.setItem("items", JSON.stringify(updatedItems));
        // this.closeModal();


    };



    addItem = (e, itemData) => {
        e.preventDefault();
        const updatedItems = [...this.state.items, itemData];
        this.setState(prevState => ({"items": updatedItems }));
        localStorage.setItem("items", JSON.stringify(updatedItems));
        this.closeModal();
    };


    render() {
        const {isModalOpen, editItemData, removeItemData, addItemData} = this.state;
        const context = {
            ...this.state,
            openModalFn: this.openModal,
            removeItemFn: this.removeItem,
            updateItemFn: this.updateItem,
            addItemFn: this.addItem
        };

        return (
            <BrowserRouter>
                <AppContext.Provider value={context}>
                    <Header/>
                    <Switch>
                        <Route exact path={"/"}><DashboardPage/></Route>
                        <Route path={"/settings"}><SettingsPage/></Route>
                        <Route path={"/shoppinglist"}><ShoppingListPage/></Route>
                    </Switch>
                    {isModalOpen && <Modal editItemData={editItemData}
                                           removeItemData={removeItemData}
                                           addItemData={addItemData}
                                           updateItemFn={this.updateItem}
                                           closeModalFn={this.closeModal}
                                           removeItemFn={this.removeItem}
                    />}
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
