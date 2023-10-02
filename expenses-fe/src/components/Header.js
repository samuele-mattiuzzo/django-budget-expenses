import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={process.env.PUBLIC_URL + 'logo192.png'}
          width="50"
          style={{ marginTop: "20px" }}
          alt="Samuele Mattiuzzo"
        />
        <h1>Expenses</h1>
      </div>
    );
  }
}

export default Header;
