import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="../logo.svg"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
          alt="Samuele Mattiuzzo"
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>Expenses</h1>
      </div>
    );
  }
}

export default Header;
