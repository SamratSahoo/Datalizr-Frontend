import { FaRegUser } from "react-icons/fa";
import { Redirect } from "react-router-dom";

import React from "react";

const UserToS = (props) => {
  const usernameValid =
    props.username.length >= 5 && props.username.length <= 30;

  const checkValidSignIn = () => {
    props.usernameExists();
    return <Redirect to="/" />;
  };

  return (
    <div className="RegisterBox">
      <div className="RegisterBoxTitle">
        <div className="RegisterHeading">
          <p>Choose a Username</p>
        </div>
        {/* <div className="RegisterSubHeading">
                        <p>We've sent a 6-digit code to your email.</p>
                    </div> */}
      </div>
      <div className="NativeRegistration">
        <div className="NativeRegInputRow">
          <FaRegUser className="RegisterIcon" />
          <input
            type="tezt"
            placeholder="Enter Username"
            onChange={(event) => props.updateUserName(event)}
            value={props.username}
          />
        </div>
        {/* <div className="RegisterToSCheck">
                        <input type="checkbox" id="ToSAgree"/>
                        <label for="ToSAgree"><p>checkbox</p></label>
                    </div> */}
        <div className="RegisterChecksOnForm">
          <p style={{ display: props.usernameTaken ? null : "none" }}>
            * This username has already been taken.
          </p>
        </div>
        <div
          className={
            usernameValid ? "NativeRegSubmit" : "NativeRegSubmitDisabled"
          }
          onClick={usernameValid ? checkValidSignIn : null}
        >
          <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default UserToS;
