import React from "react";
import Trow from "./Trow";

export default class RTbody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var i = 0;
    if (this.props.rows.size === 0) {
      console.log("nothing to do here");
      return (<tbody></tbody>);
    }

    window.rows = this.props.rows;

    for (let row of this.props.rows.values()) {
      console.log(row.toString());
    }
    return (
      <tbody>
      {[...this.props.rows.values()].map(row => (
        <Trow
          key={row.t0}
          arg={[row.t1, new Date().getTime(), false]}
        />
      ))}
      </tbody>
    );
  }
}
