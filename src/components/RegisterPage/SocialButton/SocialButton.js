import React, { Component } from "react";
import SocialLogin from "react-social-login";

class SocialButton extends Component {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.triggerLogin}
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}

export default SocialLogin(SocialButton);
