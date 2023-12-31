import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Stats from "./Stats";
import ExpenseList from "./ExpenseList";
import NewExpenseModal from "./NewExpenseModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };
  }

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
          <Col      
            sm={{
              offset: 6,
              order: 2,
              size: 12
            }}
          >
            <NewExpenseModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
        <hr/>
        <Stats />
        <Row>
          <Col>
            <ExpenseList
              expenses={this.state.expenses}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
