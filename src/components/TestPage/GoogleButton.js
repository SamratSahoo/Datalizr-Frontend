import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

class GoogleButton extends Component {
  render() {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}
export default GoogleButton;
