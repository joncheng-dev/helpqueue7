import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const tempTicketList = [
    {
      names: "Homer and Bart",
      location: "Moe's",
      issue: "Flat tire",
    },
    {
      names: "Marge and Lisa",
      location: "Try 'n Save",
      issue: "Card denied",
    },
    {
      names: "Patty and Selma",
      location: "Simpsons residence",
      issue: "Door locked",
    },
  ];

  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {tempTicketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
