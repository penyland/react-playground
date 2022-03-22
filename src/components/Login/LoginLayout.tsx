import React, { ReactNode } from "react";

export default class LoginLayout extends React.Component<{}> {

  render(): ReactNode {
    return (
      <div id="login-background">
        {this.props.children}
      </div>
    );
  }
}