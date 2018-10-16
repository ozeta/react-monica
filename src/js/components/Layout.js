import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Head from "./Head";
import Header from "./Header";
import TableList from "./TableList/TableList";
import ButtonGroup from "./PagedButtons/ButtonGroup";
import RowStore from "../data/stores/RowStore";
import UserStore from "../data/stores/UserStore";
import RowActions from "../data/actions/RowActions";
import UserActions from "../data/actions/users/UserActions";
/*

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Welcome"
    };

  }
  static getStores() {
    return [
      RowStore,
      UserStore,
    ];
  }

  static getState() {
    return {
      rows: RowStore.getState(),
      users: UserStore.getState(),
      addAction: RowActions.addAction,
      addUser: UserActions.addUserAction,
    };
  }
  changeTitle(title) {
    this.setState({ title });
  }
 static calculateState(){

 }
  render() {
    return (
      <Router>
        <div>
          ciao!
          <Link to="/head">HHHHDEAD</Link>
          <TableList />
          <ButtonGroup {...this.props} />
          <Header
            changeTitle={this.changeTitle.bind(this)}
            title={this.state.title}
          />
          <Route path="/head" component={Head} />
        </div>
      </Router>
    );
  }
}
*/
/*

export default function Layout(props) {
  return (<ButtonGroup {...props} />);
} */

function Layout(props) {
  return  (
    <Router>
      <div>
        ciao!
        <Link to="/head">HHHHDEAD</Link>
        <TableList {...props} />
        <ButtonGroup {...props} />
        <Header
   /*       changeTitle={changeTitle.bind(this)}
          title={this.state.title}*/
        />
        <Route path="/head" component={Head} />
      </div>
    </Router>
  );
}

export default Layout;