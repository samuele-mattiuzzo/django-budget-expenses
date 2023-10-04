import React, { Component } from "react";
import { Table } from "reactstrap";

class ExpenseList extends Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {!this.props.expenses || this.props.expenses.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            this.props.expenses.map(expense => (
              <tr key={expense.pk}>
                <td>{expense.date}</td>
                <td>{expense.total}</td>
                <td>{expense.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseList;
