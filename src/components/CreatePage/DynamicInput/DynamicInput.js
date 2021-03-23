import { Button } from "@material-ui/core";
import React, { Component } from "react";
import FormElement from "../FormElement/FormElement";
import "./DynamicInput.css";

class DynamicInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
    };
    this.addColumn = this.addColumn.bind(this);
    this.cols = [];
    this.input = "";
  }

  addColumn(event) {
    event.preventDefault();
    var input = this.input;
    this.cols.push(input.state.keyElement);
    this.setState(
      {
        columns: this.cols,
      },
      () => console.log(this.state.columns)
    );
    document.getElementById("reset-field").value = "";
  }

  render() {
    return (
      <div className="outer-dynamic-input-container">
        <div className="dynamic-input-container">
          <FormElement
            className="input-fields"
            placeholder="Field"
            ref={(c) => (this.input = c)}
            name="input"
            id="reset-field"
            onChange={this.props.onChange}
          ></FormElement>
          <Button
            color="primary"
            variant="contained"
            id="add-field"
            className="field-button"
            onClick={this.addColumn}
          >
            Add Field
          </Button>
        </div>
        <div className="field-list-container">
          Fields:
          {this.cols.map((column, index) => (
            <div className="field-display">{column}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default DynamicInput;
