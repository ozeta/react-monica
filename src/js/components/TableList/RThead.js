import React from "react";

export default class RThead extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <thead>
        <tr>
          <th>Username</th>
          <th>Last session</th>
          <th>Actions</th>
        </tr>
      </thead>
    );
  }
}
