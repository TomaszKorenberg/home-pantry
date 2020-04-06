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
        items: JSON.parse(localStorage.getItem("items"))
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
        this.openModal("remove", itemData);

        const items = JSON.parse(localStorage.getItem("items")).filter(item => item.name !== itemData.name);
        localStorage.setItem("items", JSON.stringify(items));
        this.setState({"items": items})
        this.closeModal();
    };

    updateItem = (itemData) => {
        console.log("Update FN");
        this.openModal("update", itemData)

    };

    addItem = (e, itemData) => {
        e.preventDefault();

        this.setState((prevState) => {

            //fixme: zmienic na ternary operator "!prevState ? "" : ...prevState.items," DRY!!!

            if (prevState.items) {
                localStorage.setItem("items", JSON.stringify([...prevState.items,
                    {
                        name: itemData.name,
                        count: itemData.count,
                        minCount: itemData.minCount,
                    }]));

                this.setState({
                    "items": [...prevState.items,
                        {
                            name: itemData.name,
                            count: itemData.count,
                            minCount: itemData.minCount,
                        }]
                })
            } else {
                localStorage.setItem("items", JSON.stringify([
                    {
                        name: itemData.name,
                        count: itemData.count,
                        minCount: itemData.minCount,
                    }]));
                this.setState({
                    "items": [...prevState.items,
                        {
                            name: itemData.name,
                            count: itemData.count,
                            minCount: itemData.minCount,
                        }]
                })
            }
        });
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
                    <Footer/>
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
