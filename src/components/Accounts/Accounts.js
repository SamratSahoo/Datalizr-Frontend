import React from "react";
import Jumbotron from "../UI/Jumbotron/Jumbotron";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AccountSF from "./AccountsSF/AccountSF";

const Accounts = (props) => {
  if (!localStorage.getItem("authenticated")) {
    return <Redirect path="/register" />;
  }

  return (
    <div>
      <Jumbotron
        header={<p>Welcome, {props.username}!</p>}
        subheader={
          <p>
            This is your personal profile page where you may change your
            username and see other stats. Happy datalizing!
          </p>
        }
        link="/dashboard"
        buttonText={<p>Create Datasets</p>}
        sideFunction={<AccountSF id={props.id} />}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authenticated,
    username: state.username,
    id: state.id,
  };
};

export default connect(mapStateToProps)(Accounts);
