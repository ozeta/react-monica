import React from "react";
import RTable from "./RTable";
import RThead from "./RThead";
import RTbody from "./RTbody";
import ButtonGroup_Next from "../PagedButtons/ButtonGroup_Next";
import DevButtons from "../PagedButtons/DevButtons";

export default class TableList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.outerDivClass}>
        <h1 className="">{this.props.title}</h1>
        <RTable {...this.props} >
          <RThead {...this.props} />
          <RTbody {...this.props}/>
        </RTable>
        <DevButtons {...this.props} />
        <ButtonGroup_Next {...this.props} />
      </div>
    );
  }
}