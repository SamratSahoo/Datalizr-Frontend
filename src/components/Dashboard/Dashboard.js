import NewProjectButton from "./NewProjectButton/NewProjectButton";
import React, { Component } from "react";
import ProjectList from "./ProjectList/ProjectList";
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  props = {
    isAuth: localStorage.getItem("authenticated"),
  };

  render() {
    if (!localStorage.getItem("authenticated")) {
      return <Redirect path="/register" />;
    }
    return (
      <div>
        {/* <ProfileInformation></ProfileInformation> */}
        <ProjectList></ProjectList>
      </div>
    );
  }
}

export default Dashboard;
