import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket } = props;

  return (
    <React.Fragment>
      <h2>Ticket Detail</h2>
      <hr />
      <h3>{ticket.names}</h3>
      <p>{ticket.location}</p>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <button onClick={props.onClickingEdit}>Edit Ticket</button>
      <button onClick={props.onDeletingTicket}>Delete Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.array,
  onClickingEdit: PropTypes.func,
  onDeletingTicket: PropTypes.func,
};

export default TicketDetail;
