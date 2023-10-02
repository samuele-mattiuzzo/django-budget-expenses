import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewExpenseForm extends React.Component {
  state = {
    pk: 0,
    total: "",
    category: "",
    date: ""
  };

  componentDidMount() {
    if (this.props.expense) {
      const { pk, date, total, category } = this.props.expense;
      this.setState({ pk, date, total, category });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createExpense = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editExpense = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.expense ? this.editExpense : this.createExpense}>
        <FormGroup>
          <Label for="date">Date:</Label>
          <Input
            type="text"
            name="date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="total">Total:</Label>
          <Input
            type="text"
            name="total"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.total)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category:</Label>
          <Input
            type="text"
            name="category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.category)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewExpenseForm;
