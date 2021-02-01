import axios from "axios";
import React, { Component } from "react";
import "./NewProjectButton.css";

class NewProjectButton extends Component {
  createProject() {
    const api_url = process.env.REACT_APP_API_AZURE + "createProject";
    console.log(api_url);
    const dataToSend = {
      fileType: ".csv",
      columns: ["Hello", "World"],
    };

    const headersUse = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios.post(api_url, dataToSend, headersUse).then((res) => console.log(res));
    console.log("request finished");
  }

  render() {
    return (
      <div>
        <button onClick={this.createProject} className="btn">
          <span className="txt">Create Project</span>
        </button>
      </div>
    );
  }
}

export default NewProjectButton;
