import axios from "axios";
import React, { Component } from "react";
import ProjectBox from "../ProjectBox/ProjectBox";
import "./ProjectList.css";

class ProjectList extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    const api_url = process.env.REACT_APP_API_LOCAL + "getProjects";
    const headersUse = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const dataToSend = { id: localStorage.getItem("id") };
    axios
      .post(api_url, dataToSend, headersUse)
      .then((res) => this.setState({ data: res["data"]["projects"] }));
  }

  render() {
    return (
      <div className="projects-container">
        {this.state.data.map((dataset, index) => (
          <ProjectBox
            key={index}
            className="project"
            datasetName={dataset["datasetName"]}
            datasetId={dataset["id"]}
            description={dataset["description"]}
            fileType={".csv"}
          >
            {dataset}
          </ProjectBox>
        ))}
      </div>
    );
  }
}

export default ProjectList;
