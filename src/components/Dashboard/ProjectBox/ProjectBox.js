import "./ProjectBox.css";
import React, { Component } from "react";
import AddDataButton from "../AddDataButton/AddDataButton";

class ProjectBox extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="name-text">{this.props.datasetName}</div>
        <div className="id-text">
          <span className="subheader-text">Dataset ID:</span>{" "}
          {this.props.datasetId}
        </div>
        <div className="description-text">
          <span className="subheader-text">Description:</span>{" "}
          {this.props.description}
        </div>
        <div className="add-data-btn">
          <AddDataButton
            className="add-data-btn"
            datasetId={this.props.datasetId}
            fileType={this.props.fileType}
            userId={localStorage.getItem("userId")}
            columnsToAppend={["Hello", "World"]}
          >
            Add Data
          </AddDataButton>
        </div>
        <hr className="divider"></hr>
      </div>
    );
  }
}
export default ProjectBox;
