import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      //   <input
      //     onChange={formProps.input.onChange}
      //     value={formProps.input.value}
      //   />
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label={"Enter Title"}
        />
        <Field
          name="description"
          component={this.renderInput}
          label={"Enter Description"}
        />
        <button className="ui button blue" type="submit">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter  a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

 export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);


