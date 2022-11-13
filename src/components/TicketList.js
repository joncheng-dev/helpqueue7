import React from "react";
import Ticket from "./Ticket";

function TicketList(props) {
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {props.ticketList.map((ticket) => (
        <Ticket onClickingTicket={props.onSelectingTicket} names={ticket.names} location={ticket.location} issue={ticket.issue} id={ticket.id} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
