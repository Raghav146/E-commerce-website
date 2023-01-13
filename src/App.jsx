import React, { Component } from "react";
import NavBar from "./navbar";
import Dashboard from "./Dashboard";
import Login from "./login";
import ShoppingCart from "./shoppingCart";
import CustomersList from "./customerList";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./nomatch";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/customers" element={<CustomersList/>} />
            <Route path="/cart" element={<ShoppingCart/>} />
            <Route path="*" component={NoMatchPage} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}