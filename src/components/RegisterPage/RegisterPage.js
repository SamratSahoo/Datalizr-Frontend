import React, { useState } from "react";
import Jumbotron from "../UI/Jumbotron/Jumbotron";
import "./RegisterPage.css";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import RegisterForm from "./RegisterForm/RegisterForm";
import UserToSPage from "./UserToSPage/UserToSPage";

const RegisterPage = (props) => {
  const [googleemail, setgoogleemail] = useState(null);
  const [googleid, setgoogleid] = useState(null);
  const [username, setusername] = useState("");
  const [usernameTaken, setusernameTaken] = useState(false);
  const [registrationStep, setregistrationStep] = useState(0);
  const [registrationStepChanged, setregistrationStepChanged] = useState(false);
  const history = useHistory();

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  const updateUserName = (event) => {
    setusername(event.target.value);
  };

  const saveUserName = () => {
    axios
      .post(
        process.env.REACT_APP_API_AZURE + "authentication/googleSignUp",
        {
          email: googleemail,
          username: username,
          token: googleid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        props.onRegister(res.data);
        window.location.reload();
        return <Redirect to="/" />;
      });
  };

  const accountExistsCheck = async (user) => {
    axios
      .post(
        process.env.REACT_APP_API_AZURE + "authentication/googleLogin",
        {
          token: user["tokenObj"]["id_token"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (res.data["success"]) {
          props.onRegister({ ...res.data });
          window.location.reload();
          return <Redirect to="/" />;
        } else {
          setgoogleemail(user["profileObj"]["email"]);
          setgoogleid(user["tokenObj"]["id_token"]);
          setregistrationStep(1);
          setregistrationStepChanged(true);
        }
      });
  };

  const usernameExists = () => {
    axios
      .post(
        process.env.REACT_APP_API_AZURE + "authentication/usernameAvailable",
        {
          username: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log(res.data["userAvailable"]);
        if (res.data["userAvailable"]) {
          saveUserName();
          return <Redirect to="/" />;
        } else {
          setusernameTaken(true);
        }
      });
  };

  if (props.isauth) {
    history.push("/");
  }

  return (
    <div>
      <Jumbotron
        header={
          <p>
            Become a member and build <i>amazing</i> datasets.
          </p>
        }
        subheader={
          <p>
            The days of spending hours finding mediocre data are over. With our
            crowdsourcing process, you can focus on what really matters.
          </p>
        }
        nobutton
        sideFunction={
          <div className="Register">
            {registrationStep === 0 ? (
              <RegisterForm
                handleSocialLogin={accountExistsCheck}
                handleSocialLoginFailure={handleSocialLoginFailure}
              />
            ) : null}
            {registrationStep === 1 && registrationStepChanged ? (
              <UserToSPage
                updateUserName={updateUserName}
                usernameExists={usernameExists}
                usernameTaken={usernameTaken}
                username={username}
              />
            ) : null}
          </div>
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isauth: state.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (data) => dispatch({ type: "REGISTER", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
