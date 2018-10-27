import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Head from "./Head";
import Header from "./Header";
import TableList from "./TableList/TableList";
import ButtonGroup_Next from "./PagedButtons/ButtonGroup_Next";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import UserList from "./UserList/UserList";
import SessionList from "./SessionList/SessionList";

function Layout(props) {
  return (
    <Router>
      <div>
        <Nav/>
        <Header/>
        <div className="py-5">

          <div className="container-fluid m-5">
            <div className="row">
              <UserList {...props} title="Users" outerDivClass="col-sm-12 col-md-12 col-lg-6 bg-light mx-auto"/>
              <SessionList {...props} title="Sessions"/>

              {/*
              <div className="col-sm-12 col-md-12 col-lg-6">
                <h1 className="">Sessions</h1>
                <TableList {...props} id="SessionList"/>
                <ButtonGroup_Next {...props} />
                <Route path="/other" component={Head}/>

              </div>*/}
            </div>
          </div>
        </div>
        <div className="py-3">
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default Layout;