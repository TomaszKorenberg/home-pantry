import React from 'react';
import './Root.module.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DashboardPage from "../DashboardPage/DashboardPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import ShoppingListPage from "../ShoppingListPage/ShoppingListPage";
import AppContext from "../../context";


class Root extends React.Component {

    state = {
        items: [
            {
                name: "artykuł 1",
                count: 2,
                minCount: 2,
            },
            {
                name: "artykuł 2",
                count: 1,
                minCount: 2,
            },
            {
                name: "artykuł 3",
                count: 0,
                minCount: 1,
            }
        ]
    };

    render() {

        const context = {...this.state};
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
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
