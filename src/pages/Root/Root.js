import React from 'react';
import './Root.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DashboardPage from "../DashboardPage/DashboardPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import ShoppingListPage from "../ShoppingListPage/ShoppingListPage";



function Root() {
  return (
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route exact path={"/"}><DashboardPage/></Route>
              <Route path={"/settings"}><SettingsPage/></Route>
              <Route path={"/shoppinglist"}><ShoppingListPage/></Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
  );
}

export default Root;
