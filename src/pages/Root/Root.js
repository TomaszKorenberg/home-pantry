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
        items: [
            {
                name: "artykuł 1",
                count: 2,
                minCount: 1,
            },
            {
                name: "artykuł 2",
                count: 1,
                minCount: 1,
            },
            {
                name: "artykuł 3",
                count: 0,
                minCount: 1,
            }
        ]
    };

    closeModal = () => {
        this.setState({isModalOpen: false})
    };

    openModal = (editItem, removeItem) => {
        this.setState({isModalOpen: true});
        this.setState({editItemData: editItem});
        this.setState({removeItemData: removeItem})

    };

    removeItem = (itemData) => {
        console.log("Delete!");
        console.log(itemData)
        this.openModal(null, itemData)
    };

    updateItem = (itemData) => {
        console.log("Update FN!!")
    };

    render() {
        const {isModalOpen, editItemData, removeItemData} = this.state;
        const context = {
            ...this.state,
            openModalFn: this.openModal,
            removeItemFn: this.removeItem
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
                                           updateItem={this.updateItem}
                                           closeModalFn={this.closeModal}/>}
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
