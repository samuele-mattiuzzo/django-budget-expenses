import React, { Component } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { STATS_URL } from "../constants";

import axios from "axios";
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  randomColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
  }

  componentDidMount() {
    this.loadOptions();
  }

  prepareData = (data) => {
    let res = [];

    data.forEach((element) => {
      res.push({
        ...element,
        ...{color: this.randomColor()}
      });
    });
    return res;
  }

  loadOptions = () =>{
    axios.get(STATS_URL).then(value => {
      this.setState({data: this.prepareData(value.data)})});
  } 

  render() {
    return (
      <PieChart
        viewBoxSize={[150, 250]}
        data={this.state.data}
        label={({ dataEntry }) => dataEntry.category__name}
        lineWidth={100}
      />
    );
  }
}

export default Stats;
