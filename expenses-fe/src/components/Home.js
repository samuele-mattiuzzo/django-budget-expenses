import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ExpenseList from "./ExpenseList";
import NewExpenseModal from "./NewExpenseModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    expenses: []
  };

  componentDidMount() {
    this.resetState();
  }

  getExpenses = () => {
    axios.get(API_URL).then(res => this.setState({ expenses: res.data }));
  };

  resetState = () => {
    this.getExpenses();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ExpenseList
              expenses={this.state.expenses}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewExpenseModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
