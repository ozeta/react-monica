import React from "react";
import Trow from "./Trow";

export default class RTbody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var i = 0;
    var list = [
      <Trow key="0" arg={["mar", "10/10", "Show sessions"]}/>,
      <Trow key="1"  arg={["esp", "10/11", "Show sessions"]} />,
      <Trow key="2" arg={["sav", "10/12", "Show sessions"]} />,
    ];

    return (
      <tbody>
        {list}
      </tbody>
    );
  }
}
