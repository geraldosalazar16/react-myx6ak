import React, { Component, useState, useEffect } from "react";
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
import TextField from '@material-ui/core/TextField';

function App() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
		setTimeout(() => {
      setOptions([
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
      ]);
    }, 1000)
	}, []);

  
  const form = FormBuilder.group({
    name: ["", Validators.required],
    option: ["", Validators.required]
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form values", form.value);
  };

  const handleReset = () => {
    form.reset();
  };

  return (
      <div>
        <p>Start editing to see some magic happen :)</p>
        <FieldGroup
          control={form}
          render={({ get, invalid }) => (
            <form onSubmit={handleSubmit}>
              <FieldControl 
                name="name"
                strict={false}
                render={({ onChange, value = '' }) => (
                  <TextField 
                  id="standard-basic" 
                  label="Standard" 
                  value={value}
                  onChange={onChange}
                  />
                )}
              />
              <FieldControl
                name="option"
                strict={false}
                render={({ onChange, value }) => (
                  <Select
                    options={options}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <button type="button" onClick={handleReset}>
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
/*
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
    name: ["", Validators.required],
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
                name="name"
                strict={false}
                render={({ onChange, value }) => (
                  <TextField 
                  id="standard-basic" 
                  label="Standard" 
                  value={value}
                  onChange={onChange}
                  />
                )}
              />
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
*/
render(<App />, document.getElementById("root"));
