import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class FormElement extends Component {
  constructor() {
    super();
    this.state = { keyElement: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ keyElement: event.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  render() {
    return (
      <TextField
        id={this.props.id}
        label={this.props.placeholder}
        onChange={this.handleChange}
        ref={this.props.ref}
        className={this.props.className}
      />
    );
  }
}

export default FormElement;
