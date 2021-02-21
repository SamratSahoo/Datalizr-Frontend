import React, { Component } from "react";
import "./Jumbotron.css";
import { motion } from "framer-motion";

class Jumbotron extends Component {
  render() {
    return (
      <div className="BoxJumbotronHolder" style={this.props.style}>
        <div className="BoxJumbotron">
          {this.props.firstFunction ? (
            <div className="BoxJumbotronSubFunction">
              {this.props.firstFunction}
            </div>
          ) : (
            <motion.div
              className="BoxJumbotronText"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="BoxJumbotronHeader">{this.props.header}</div>
              <div className="BoxJumbotronSubHeader">
                {this.props.subheader}
              </div>
              {this.props.nobutton ? null : (
                <a
                  href={this.props.link}
                  style={{ textDecoration: "none" }}
                  className="BoxJumbotronButtonLink"
                >
                  <div className="BoxJumbotronButton">
                    {this.props.buttonText}
                  </div>
                </a>
              )}
            </motion.div>
          )}
          <div className="BoxJumbotronSubFunction">
            {this.props.sideFunction}
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
