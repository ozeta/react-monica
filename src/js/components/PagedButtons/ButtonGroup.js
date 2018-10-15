import React from "react";
//import TableList from "./TableList/TableList";

import RowActions from "../../data/actions/RowActions";

export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addTodo = props.addAction.bind(this);
  }
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
              onClick={this.onClick}
            >
              next 10
            </a>
            <a
              href="#"
              class="btn btn-primary"
              onClick={this.onClick}
            >
              Next 20
            </a>
            <a
              href="#"
              class="btn btn-primary"
              onClick={this.onClick}
            >
              Show All
            </a>
            <a
              href="#"
              class="btn btn-primary"
              onClick={() => {
                this.addTodo("nuovo");
              }}
            >
              Dispatch action
            </a>
          </div>
        </div>
      </div>
    );
  }
}
