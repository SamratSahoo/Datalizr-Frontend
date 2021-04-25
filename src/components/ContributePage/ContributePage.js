import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ExploreList from "./ContributeList/ContributeList";

class ContributePage extends Component {
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
        <ExploreList></ExploreList>
      </div>
    );
  }
}

export default ContributePage;
