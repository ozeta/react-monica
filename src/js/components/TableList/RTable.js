import React from "react";
import RThead from "./RThead";
import RTbody from "./RTbody";

export default class RTable extends React.Component {

  render() {
    return (
      <table>
        <RThead/>
        <RTbody/>
      </table>
    );
  }
}
