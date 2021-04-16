import React, { Component } from "react";
import "./ReviewPage.css";
import { Redirect } from "react-router-dom";
import ReviewBox from "./ReviewBox/ReviewBox";

class ReviewPage extends Component {
  render() {
    if (!localStorage.getItem("authenticated")) {
      return <Redirect path="/register" />;
    }

    return <ReviewBox></ReviewBox>;
  }
}
export default ReviewPage;
