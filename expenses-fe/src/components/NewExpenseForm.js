import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import AsyncSelect from 'react-select/async'

import axios from "axios";

import { API_URL, CATEGORIES_URL } from "../constants";

class NewExpenseForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pk: 0,
      date: "",
      total: "",
      category: ""
    };
  }

  componentDidMount() {
    if (this.props.expense) {
      const { pk, date, total, category } = this.props.expense;
      this.setState({ pk, date, total, category });
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeSelect = e => {
    this.setState({ category: e.pk });
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

  loadOptions = async () => {
    const res = await fetch(CATEGORIES_URL);
    const data = await res.json();
    return data;
  }

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.expense ? this.editExpense : this.createExpense}>
        <FormGroup>
          <Label for="date">Date:</Label>
          <Input
            type="date"
            name="date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="total">Total:</Label>
          <Input
            type="number"
            name="total"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.total)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="category">Category:</Label>
          <AsyncSelect
            name="category"
            cacheOptions
            defaultOptions
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.pk}
            loadOptions={this.loadOptions}
            onChange={this.onChangeSelect}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewExpenseForm;
