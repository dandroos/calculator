import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div
        className={`button ${this.props.type}`}
        style={{ gridArea: this.props.id}}
        onClick={this.props.click}
        type={this.props.type}
        value={this.props.value} tabIndex="0" id={this.props.id}
      >
        {this.props.value}
      </div>
    );
  }
}
