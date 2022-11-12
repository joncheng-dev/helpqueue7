import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainTicketList: [],
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formShowing: !prevState.formShowing,
    }));
  };

  handleAddingNewTicket = (newTicket) => {
    const updatedMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      mainTicketList: updatedMainTicketList,
    });
  };

  render() {
    let currentlyDisplaying = null;
    let buttonText = null;

    if (this.state.formShowing) {
      currentlyDisplaying = <NewTicketForm onClickingAddNewTicket={this.handleAddingNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplaying = <TicketList />;
      buttonText = "Add New Ticket";
    }

    return (
      <React.Fragment>
        {currentlyDisplaying}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
