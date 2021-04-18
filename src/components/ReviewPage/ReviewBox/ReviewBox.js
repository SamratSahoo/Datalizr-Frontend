import React, { Component } from "react";
import "./ReviewBox.css";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

class ReviewBox extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      datasetId: "",
      data: [],
      userId: "",
      fileType: ".csv",
      loaded: false,
      approvals: 0,
      success: false,
      fields: [],
      redirect: false,
    };
    this.approveData = this.approveData.bind(this);
    this.denyData = this.denyData.bind(this);
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
        id: res.data.id,
        datasetId: res.data.datasetId,
        data: res.data.data,
        userId: res.data.userId,
        fileType: res.data.fileType,
        loaded: res.data.loaded,
        approvals: res.data.approvals,
        success: res.data.success,
        fields: res.data.fields,
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
      datasetId: this.state.datasetId,
      dataId: this.state.id,
      approvalStatus: true,
    };
    axios.post(api_url, dataToSend, headersUse).then((res) => {
      this.renderRedirect();
      this.render();
    });
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
      datasetId: this.state.datasetId,
      dataId: this.state.id,
      approvalStatus: false,
    };
    axios.post(api_url, dataToSend, headersUse).then((res) => {
      this.renderRedirect();
      this.render();
    });
  }

  renderRedirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      window.location.reload();
    }
    if (this.state.success) {
      return (
        <div className="review-container">
          <div className="review-partition-1">
            Fields:
            <div className="fields-container">
              {this.state.fields.map((field, index) => (
                <div className="field-review">{field}</div>
              ))}
            </div>
          </div>
          <div className="review-partition">
            Data:
            <div className="fields-container">
              {this.state.data.map((field, index) => (
                <div className="field-review">{field}</div>
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
