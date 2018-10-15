import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import RowActions from "./data/actions/RowActions";
import UserActions from "./data/actions/users/UserActions";

const app = document.getElementById("app");


RowActions.addAction("My first task");
RowActions.addAction("Another task");
RowActions.addAction("Finish this tutorial");

ReactDOM.render(<AppContainer/>, app);