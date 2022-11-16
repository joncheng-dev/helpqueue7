import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTicketForm(props) {
  const { ticket } = props;

  function updatedInfo(event) {
    event.preventDefault();

    props.onUpdatingTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id,
    });
  }
  return (
    <React.Fragment>
      <h3>Edit Ticket Form</h3>
      <ReusableForm onClickingSubmit={updatedInfo} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onUpdatingTicket: PropTypes.func,
};

export default EditTicketForm;
