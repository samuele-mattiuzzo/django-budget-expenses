import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewExpenseForm from "./NewExpenseForm";
import ErrorBoundary from "./ErrorBoundary";

class NewExpenseModal extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Button onClick={this.toggle}>Submit</Button>
        </ErrorBoundary>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Expense form</ModalHeader>

          <ModalBody>
            <NewExpenseForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              expense={this.props.expense}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewExpenseModal;
