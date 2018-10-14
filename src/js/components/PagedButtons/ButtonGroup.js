import React from "react";
//import TableList from "./TableList/TableList";

import RowActions from '../../data/Actions/RowActions';

export default class ButtonGroup extends React.Component {
  onClick() {
    console.log("CLICKED");
  }
  render() {
    return (
      <div class="row">
        <div class="col-md-12 justify-content-center align-items-center">
          <div class="btn-group">
            <a
              href="#"
              class="btn btn-primary"
              onClick={this.onClick.bind(this)}
            >
              next 10
            </a>
            <a
              href="#"
              class="btn btn-primary"
              onClick={this.onClick.bind(this)}
            >
              Next 20
            </a>
            <a
              href="#"
              class="btn btn-primary"
              onClick={this.onClick.bind(this)}
            >
              Show All
            </a>
            <a
              href="#"
              class="btn btn-primary"
//              onClick={this.onClick.bind(this)}
            >
              Dispatch action
            </a>
          </div>
        </div>
      </div>
    );
  }
}
