import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FaRegUser, FaCheck } from "react-icons/fa";
import "./AccountSF.css";

const AccountSF = (props) => {
  const [username, setUsername] = useState("");
  const [usernameConfirm, setUsernameConfirm] = useState("");
  const [usernameTaken, setUsernameTaken] = useState(false);

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
        if (res.data["userAvailable"]) {
          changeUsername();
        } else {
          setUsernameTaken(true);
        }
      });
  };

  const changeUsername = () => {
    axios
      .post(
        process.env.REACT_APP_API_AZURE + "authentication/changeUsername",
        {
          newUsername: username,
          id: props.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        props.changeUser(res.data["updatedUsername"]);
        window.location.reload();
      });
  };

  const usernameValid =
    username.length >= 5 &&
    username.length <= 30 &&
    username === usernameConfirm;

  return (
    <div className="AccountSF">
      <div className="RegisterBox">
        <div className="RegisterBoxTitle">
          <div className="RegisterHeading">
            <p>Change Username</p>
          </div>
        </div>
        <div className="NativeRegistration">
          <div className="NativeRegInputRow">
            <FaRegUser className="RegisterIcon" />
            <input
              type="tezt"
              placeholder="Enter Username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <div className="NativeRegInputRow">
            <FaCheck className="RegisterIcon" />
            <input
              type="tezt"
              placeholder="Confirm Username"
              onChange={(event) => setUsernameConfirm(event.target.value)}
              value={usernameConfirm}
            />
          </div>
          <div className="RegisterChecksOnForm">
            <p style={{ display: usernameTaken ? null : "none" }}>
              * This username has already been taken.
            </p>
          </div>
          <div
            className={
              usernameValid ? "NativeRegSubmit" : "NativeRegSubmitDisabled"
            }
            onClick={usernameValid ? usernameExists : null}
          >
            <p>Change Username</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (user) => dispatch({ type: "CHANGE_USERNAME", newUser: user }),
  };
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSF);
