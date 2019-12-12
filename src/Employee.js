import React, { Component } from 'react';


class Employee extends React.Component {
  render() {
    return (
      <li className="employee">
        <div>
          <b>ID:</b> {this.props.id}
        </div>
        <div>
          <b>Name:</b> {this.props.name}
        </div>
        <div>
          <b>Age:</b> {this.props.age}
        </div>
        <div>
          <b>Gender:</b> {this.props.gender}
        </div>
        <div>
          <b>Email:</b> {this.props.email}
        </div>
        <div>
          <b>Phone:</b> {this.props.phone}
        </div>
      </li>
    );
  }
}
    export default  Employee;
