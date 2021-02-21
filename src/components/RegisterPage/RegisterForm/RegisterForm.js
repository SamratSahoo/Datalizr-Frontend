import React, { Component } from "react";
import "./RegisterForm.css";
import SocialButton from "../SocialButton/SocialButton";

class RegisterForm extends Component {
  render() {
    return (
      <div className="RegisterBox">
        <div className="RegisterBoxTitle">
          <div className="RegisterHeading">
            <p>Login &#8226; Register</p>
          </div>
          <div className="RegisterSubHeading">
            <p>Create the best datasets. Ever.</p>
          </div>
        </div>
        <div className="NativeRegistration">
          <SocialButton
            provider="google"
            appId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onLoginSuccess={this.props.handleSocialLogin}
            onLoginFailure={this.props.handleSocialLoginFailure}
            className="GoogleRegSubmit"
          >
            <div className="GoogleIcon"></div>
            <p>Sign In with Google</p>
          </SocialButton>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
