import React, { Component } from "react";
import "./CreatePage.css";
import { Redirect } from "react-router-dom";
import RadioButtonGroup from "./RadioButtonGroup/RadioButtonGroup";
import FormElement from "./FormElement/FormElement";
import DynamicInput from "./DynamicInput/DynamicInput";
import axios from "axios";
import { Button } from "@material-ui/core";

class CreatePage extends Component {
  constructor() {
    super();
    this.state = {
      fileType: ".csv",
      columns: [],
      userId: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
      description: "",
      datasetName: "",
      redirect: false,
    };
    this.dynamicInput = React.createRef();
    this.createDataset = this.createDataset.bind(this);
  }
  renderRedirect = () => {
    this.setState({ redirect: true });
  };

  fileTypehandler = (data) => this.setState({ fileType: data["fileType"] });
  datasetNameHandler = (data) =>
    this.setState({ datasetName: data["keyElement"] });
  datasetDescriptionHandler = (data) =>
    this.setState({ description: data["keyElement"] });

  createDataset() {
    const api_url = process.env.REACT_APP_API_LOCAL + "createProject";
    this.setState(
      {
        columns: this.dynamicInput.current.state.columns,
      },
      () => {
        let dataToSend = this.state;
        const headersUse = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };

        axios.post(api_url, dataToSend, headersUse).then((res) => {
          console.log(res);
          console.log(this.state);
          this.renderRedirect();
          this.render();
        });
      }
    );
  }

  handleCols = (cols) => {
    this.setState({ colums: cols });
  };

  render() {
    if (!localStorage.getItem("authenticated")) {
      return <Redirect path="/register" />;
    }

    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="create-container">
        <div className="create-title-text">Start Creating Data</div>
        <div className="create-subtitle-text">
          This is where you can create a Dataset project where anyone across the
          world can contribute data to. Start creating incredible datasets with
          a click of a button!
        </div>
        <hr></hr>
        <div className="create-step-text">Step 1: Choose Type of Project</div>
        <RadioButtonGroup
          buttons={[
            "Text Dataset (CSV)",
            "Image Dataset: Coming Soon",
            "Time Series Dataset: Coming Soon",
          ]}
          isDisabled={[false, true, true]}
          onChange={this.fileTypehandler}
          values={[".csv", ".png", ".csv"]}
          className="create-fileType"
        ></RadioButtonGroup>
        <hr></hr>
        <div className="create-step-text">Step 2: Enter Your Dataset Name</div>
        <FormElement
          onChange={this.datasetNameHandler}
          placeholder="Dataset Name"
          id="standard-full-width"
          className="input-field"
        ></FormElement>
        {/* <hr className="input-hr"></hr> */}
        <div className="create-step-text">
          Step 3: Enter a Description of the Dataset
        </div>
        <FormElement
          onChange={this.datasetDescriptionHandler}
          placeholder="Dataset Description"
          id="standard-full-width"
          className="input-field"
        ></FormElement>
        {/* <hr></hr> */}
        <div className="create-step-text">
          Step 4: Enter the columns of your dataset
        </div>
        <DynamicInput ref={this.dynamicInput}></DynamicInput>

        <Button
          className="create-dataset"
          color="primary"
          onClick={this.createDataset}
          variant="contained"
        >
          Create Dataset
        </Button>
      </div>
    );
  }
}
export default CreatePage;
