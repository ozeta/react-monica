import React from "react";
import Trow from "./Trow";

export default class RTbody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var i = 0;
    if (this.props.users.size === 0) {
      console.log(this.props);
      console.log("nothing to do here");
      return (<tbody></tbody>);
    }
    for (let user of this.props.users.values()) {
      console.log("STORE->user:");
      console.log(user.toString());
    }
    let date = new Date().getTime().toString();
    return (
      <tbody>
      {[...this.props.users.values()].map(row => (
        <Trow
          key={row.t0}
          arg={[row.t0, row.t1, row.t2]}
        />
      ))}
      </tbody>
    );
  }
}
