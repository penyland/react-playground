import React, { ReactNode } from "react";
import { GraphData } from "../authConfig";

type Props = {
  graphData: GraphData;
}

export default class ProfileData extends React.Component<Props> {

  render(): ReactNode {
    return (
      <div>
        <div id="profile-div">
          <p><strong>First Name: </strong> {this.props.graphData.givenName}</p>
          <p><strong>Last Name: </strong> {this.props.graphData.surname}</p>
          <p><strong>Email: </strong> {this.props.graphData.userPrincipalName}</p>
          <p><strong>Id: </strong> {this.props.graphData.id}</p>
        </div>
      </div>
    );
  }
}