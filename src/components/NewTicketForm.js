import React from "react";
import ReusableForm from "./ReusableForm";

function NewTicketForm(props) {
  function collectUserInfo(event) {
    event.preventDefault();

    props.onClickingAddNewTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
    });
  }

  return (
    <React.Fragment>
      <h3>New Ticket Form</h3>
      <ReusableForm onClickingSubmit={collectUserInfo} buttonText="Add Ticket" />
    </React.Fragment>
  );
}

export default NewTicketForm;
