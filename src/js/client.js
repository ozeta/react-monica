import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import AppContainer from "./containers/AppContainer";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const app = document.getElementById("app");


import RowActions from "./data/Actions/RowActions";

RowActions.addRow("My first task");
RowActions.addRow("Another task");
RowActions.addRow("Finish this tutorial");

ReactDOM.render(<AppContainer />, app);