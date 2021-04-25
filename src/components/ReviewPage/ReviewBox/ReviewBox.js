import React, { Component } from "react";
import "./ReviewBox.css";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

class ReviewBox extends Component {
  constructor() {
    super();
    this.state = {
      dataList: [],
      success: false,
      fieldList: [[]],
      redirect: false,
      currentData: [],
      currentFields: [],
    };
    this.approveData = this.approveData.bind(this);
    this.denyData = this.denyData.bind(this);
    this.currentDataProcessor = this.currentDataProcessor.bind(this);
  }

  componentDidMount() {
    const api_url = process.env.REACT_APP_API_AZURE + "getDataReview";
    const headersUse = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const dataToSend = { userId: localStorage.getItem("id") };

    axios.post(api_url, dataToSend, headersUse).then((res) => {
      this.setState({
        dataList: res.data.dataList,
        fieldList: res.data.fieldList,
        success: res.data.success,
        currentData: res.data.dataList[0]["data"],
        currentFields: res.data.fieldList[0],
      });
    });
  }

  approveData() {
    const api_url = process.env.REACT_APP_API_AZURE + "approveData";
    const headersUse = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const dataToSend = {
      userId: localStorage.getItem("id"),
      datasetId: this.state.dataList[0]["datasetId"],
      dataId: this.state.dataList[0]["id"],
      approvalStatus: true,
    };
    this.currentDataProcessor();
    axios.post(api_url, dataToSend, headersUse).then((res) => {
      console.log(this.state);
    });
  }

  currentDataProcessor() {
    console.log(this.tempDList);
    var tempDList = this.state.dataList;
    var valD = tempDList.shift();
    console.log(this.state.tempDList);
    var tempFList = this.state.fieldList;
    var valF = tempFList.shift();

    if (this.state.dataList.length > 0) {
      this.setState({
        dataList: tempDList,
        fieldList: tempFList,
      });

      this.setState({
        currentData: this.state.dataList[0]["data"],
        currentFields: this.state.fieldList[0],
      });
      console.log(this.state.currentData);
    } else {
      this.setState({
        success: false,
        currentData: "",
        currentFields: "",
      });
    }
  }

  denyData() {
    const api_url = process.env.REACT_APP_API_AZURE + "approveData";
    const headersUse = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const dataToSend = {
      userId: localStorage.getItem("id"),
      datasetId: this.state.dataList[0]["datasetId"],
      dataId: this.state.dataList[0]["id"],
      approvalStatus: false,
    };
    this.currentDataProcessor();
    axios.post(api_url, dataToSend, headersUse).then((res) => {
      console.log(this.state);
    });
  }

  renderRedirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.success) {
      return (
        <div className="review-container">
          <div className="review-partition-1">
            Fields:
            <div className="fields-container">
              {this.state.currentFields.map((field, index) => (
                <div className="field-review">{field}</div>
              ))}
            </div>
          </div>
          <div className="review-partition">
            Data:
            <div className="fields-container">
              {this.state.currentData.map((data, index) => (
                <div className="field-review">{data}</div>
              ))}
            </div>
          </div>
          <div className="button-container">
            <Button
              color="primary"
              variant="contained"
              className="div-button"
              onClick={this.approveData}
            >
              Approve
            </Button>
            <Button
              color="primary"
              variant="contained"
              className="div-button"
              onClick={this.denyData}
            >
              Deny
            </Button>
          </div>
        </div>
      );
    } else {
      return <div>No Data Available to Review at this Time</div>;
    }
  }
}
export default ReviewBox;
