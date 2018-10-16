import React from "react";

export default class RTbody extends React.Component {
constructor(){
  super();
}
  render() {
    // console.log("ROW.props -> " + this.props.arg);
    return (
        <tr>
          <td>{this.props.arg[0]}</td>
          <td>{this.props.arg[1]}</td>
          <td><a class="btn btn-primary d-inline-flex" href="#">{this.props.arg[2]}</a></td>
        </tr>
    );
  }
}
