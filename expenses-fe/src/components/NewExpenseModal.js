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

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const create = this.props.create;

    var title = "Editing Expense";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Expense";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
        >
          +
        </Button>
      );
    }
    return (
      <Fragment>
        <ErrorBoundary>
          {button}
        </ErrorBoundary>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

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
