import React from "react";

import Title from "./Title";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
      </div>
    );
  }
}
