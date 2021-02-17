import React, { Component } from "react";
import "./CreatePage.css";

class CreatePage extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="text-list">
            <div className="create-text main-text">
              <h2>Create a new Dataset Project</h2>
            </div>
            <div className="create-text">
              <h3>
                This is where you can create a Dataset project where anyone
                across the world can contribute data to. Start creating
                incredible datasets with a click of a button!
              </h3>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}
export default CreatePage;
