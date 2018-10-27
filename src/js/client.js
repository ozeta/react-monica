import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import UserActions from "./data/actions/users/UserActions";
import Rest from "./api/Rest.js";

const app = document.getElementById("app");


// RowActions.addAction("My first task");
// RowActions.addAction("Another task");
// RowActions.addAction("Finish this tutorial");
UserActions.addUserAction("espoelena", new Date().getMilliseconds(), "bho1");
UserActions.addUserAction("marcarrozzo", new Date().getMilliseconds(), "bho2");
//chiamata async a monica rest
/*let response = Rest.getSortedUsers();
response.then(data => {
  console.log("Users fetched");
  return data.json()
})
  .then(data => {
    console.log("Users: ", data);
  })
  .catch(err => {
    console.log(err)
  });
console.log(response);*/
ReactDOM.render(<AppContainer/>, app);