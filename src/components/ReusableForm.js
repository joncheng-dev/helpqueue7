import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onClickingSubmit}>
        <input type="text" name="names" placeholder="Names" />
        <br />
        <br />
        <input type="text" name="location" placeholder="Location" />
        <br />
        <br />
        <textarea name="issue" placeholder="Describe the issue" />
        <br />
        <br />
        <button>{props.buttonText}</button>
      </form>
      <br />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  onClickingSubmit: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
