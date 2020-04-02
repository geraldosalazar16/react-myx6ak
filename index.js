import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Select from "react-select";
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      options: []
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({options: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
      ]});
    }, 1000)
  }

  form = FormBuilder.group({
    option: ["", Validators.required]
  });

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form values", this.form.value);
  };

  handleReset = () => {
    this.form.reset();
  };

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <FieldGroup
          control={this.form}
          render={({ get, invalid }) => (
            <form onSubmit={this.handleSubmit}>
              <FieldControl
                name="option"
                strict={false}
                render={({ onChange, value }) => (
                  <Select
                    options={this.state.options}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <button type="button" onClick={this.handleReset}>
                Reset
              </button>
              <button type="submit" disabled={invalid}>
                Submit
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
