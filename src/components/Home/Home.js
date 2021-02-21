import React, { Component } from "react";
import Jumbotron from "../UI/Jumbotron/Jumbotron";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          header={<p>Making datasets has never been so easy.</p>}
          subheader={
            <p>
              Crowdsourced data{" "}
              <span style={{ fontFamily: "Inter700" }}>
                for Machine Learning
              </span>
            </p>
          }
          link="/register"
          buttonText={<p>Get Started</p>}
          sideFunction={<div className="JumboMainPic"></div>}
        />
      </div>
    );
  }
}
export default Home;
