import React from "react";

function TicketDetail(props) {
  return (
    <React.Fragment>
      <h2>Ticket Detail</h2>
      <h3>{props.names}</h3>
      <p>{props.location}</p>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr />
    </React.Fragment>
  );
}

export default TicketDetail;
