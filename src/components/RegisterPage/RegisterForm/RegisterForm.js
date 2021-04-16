import React, { Component } from "react";
import "./RegisterForm.css";
import GoogleLogin from "react-google-login";

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
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={this.props.handleSocialLogin}
            onFailure={this.props.handleSocialLoginFailure}
            cookiePolicy={"single_host_origin"}
            buttonText="Sign In with Google"
            className="GoogleRegSubmit"
          >
            {/* <div className="GoogleIcon"></div> */}
            {/* <p>Sign In with Google</p> */}
          </GoogleLogin>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
