import React from "react";
import ReusableForm from "./ReusableForm";

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

export default EditTicketForm;
