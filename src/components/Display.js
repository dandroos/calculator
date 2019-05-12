import React from "react";

export default class Display extends React.Component {
  render() {
    let regex = /[-123456789.].{0,13}/;
    let string = this.props.value.toString();
    let display = string.match(regex);
    if (!display) {
      display = 0;
    }else if(display.input.length > 13){
      display = `${display}*`;
    }
    return <div className="display" id="display">{display}</div>;
  }
}