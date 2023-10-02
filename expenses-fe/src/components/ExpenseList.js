import React, { Component } from "react";
import { Table } from "reactstrap";
import NewExpenseModal from "./NewExpenseModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ExpenseList extends Component {
  render() {
    const expenses = this.props.expenses;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!expenses || expenses.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            expenses.map(expense => (
              <tr key={expense.pk}>
                <td>{expense.date}</td>
                <td>{expense.total}</td>
                <td>{expense.category}</td>
                <td align="center">
                  <NewExpenseModal
                    create={false}
                    expense={expense}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={expense.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseList;
