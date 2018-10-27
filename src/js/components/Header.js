import React from "react";

import Title from "./Title";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} />
      </div>
    );
  }
}
