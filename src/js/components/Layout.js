import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Head from "./Head";
import Header from "./Header";
import TableList from "./TableList/TableList";
import ButtonGroup from "./PagedButtons/ButtonGroup";

export default class Layout extends React.Component {
  constructor() {
    super();
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
          <ButtonGroup />
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

/*
function build(props){
  console.log("building!");
  return (<h1>ok</h1>);
}
export function Layout(props) {
  if (props.todos.size === 0) {
    console.log("non cè niente qu!");
    return null;
  }

  return (
    <div>
      Ciao!
     // {build(props)}
    </div>
  );
}
*/