import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Head from "./Head";
import Header from "./Header";
import TableList from "./TableList/TableList";
import ButtonGroup from "./PagedButtons/ButtonGroup";
/*
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Welcome"
    };
  }

  changeTitle(title) {
    this.setState({ title });
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

export default function Layout(props){
  return (<ButtonGroup {...props} />);
} 