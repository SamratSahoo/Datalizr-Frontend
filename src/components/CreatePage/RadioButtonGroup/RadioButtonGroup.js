import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "./RadioButtonGroup.css";

class RadioButtonGroup extends Component {
  constructor() {
    super();
    this.state = { fileType: ".csv" };
  }

  handleChange = (value) => {
    this.setState({ fileType: value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  render() {
    return (
      <div ref={this.radioRef}>
        <RadioGroup
          className="radio-button-group"
          onChange={this.handleChange}
          horizontal
        >
          {this.props.buttons.map((button, index) => (
            <RadioButton
              value={this.props.values[index]}
              rootColor="black"
              iconSize={15}
              iconInnerSize={5}
              pointColor="DodgerBlue"
              disabled={this.props.isDisabled[index]}
              disabledColor="gray"
            >
              {button}
            </RadioButton>
          ))}
        </RadioGroup>
      </div>
    );
  }
}
export default RadioButtonGroup;
