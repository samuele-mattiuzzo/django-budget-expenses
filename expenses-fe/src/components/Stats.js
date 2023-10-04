import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import { STATS_URL } from "../constants";

import axios from "axios";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.currenTotal = 0;
  }

  componentDidMount() {
    this.loadOptions();
  }

  updateTotal = () => {
    var total = this.state.data.reduce((accum, item) => accum + item.value, 0)
    this.currentTotal = total;
  }

  loadOptions = () => {
    axios.get(STATS_URL).then(value => {
      this.setState({data: value.data});
      this.updateTotal();
    });
  } 

  render() {
    return (

      <Container>
        <Table dark>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Category
              </th>
              <th>
                Total: £{this.currentTotal}
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.sort((a, b) => b.value - a.value).map((item, idx) => (
            <tr key={idx+1}>
              <th scope="row">
                {idx+1}
              </th>
              <td>
                {item.category__name}
              </td>
              <td>
                £{item.value}
              </td>
              <td>
                {Math.round((item.value * 100) / this.currentTotal)} %
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Stats;
