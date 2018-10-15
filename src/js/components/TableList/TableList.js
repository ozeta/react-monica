import React from "react";
import RTable from "./RTable";
import RThead from "./RThead";
import RTbody from "./RTbody";
export default class TableList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RTable>
        <RThead/>
        <RTbody/>
      </RTable>
    );
  }
}