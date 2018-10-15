import React from "react";
//import TableList from "./TableList/TableList";

import RowActions from "../../data/Actions/RowActions";

export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    console.log("BUTTON GROUP PROPS:");
    console.log(props.addRow);
    this.onClick = this.onClick.bind(this);
    this.addrow = props.addRow.bind(this);
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
                this.addrow("nuovo");
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
