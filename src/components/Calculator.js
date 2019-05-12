import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 0,
      number: 0,
      operator: "+",
      value: 0,
      isNewValue: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleClick(e) {
    this.updateState(e.target.getAttribute("type"), e.target.getAttribute("value"))
    e.target.blur();
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      switch (true) {
        case /[1234567890]/.test(e.key):
          this.updateState('number', e.key);
          break;
        case /[.]/.test(e.key):
          this.updateState('decimal', e.key);
          break;
        case /[+\-*/]/.test(e.key):
          this.updateState('operator', e.key);
          break;
        case /enter||=/i.test(e.key):
          this.updateState('operator', '=');
          break;
        default:
          console.log('Error!');
      }
      let element;

      if(e.key !== 'Enter'){
        element = document.querySelector(`[value='${e.key}']`);
      }else{
        element = document.querySelector(`[value='=']`)
      }

      if(element){
        element.focus();
        setTimeout(()=> element.blur(), 100);
      }
    })
  }

  updateState(type, value) {
    switch (type) {
      case "operator":
        if (!this.state.isNewValue) {
          this.setState({
            number: +this.state.value
          }, () => {
            var calc = 0;
            switch (this.state.operator) {
              case "+":
                calc = this.state.subtotal + this.state.number;
                break;
              case "-":
                calc = this.state.subtotal - this.state.number;
                break;
              case "*":
                calc = this.state.subtotal * this.state.number;
                break;
              case "/":
                calc = this.state.subtotal / this.state.number;
                break;
              case "=":
                calc = this.state.subtotal;
                break;
              default:
                calc = 0;
            }
            if (value === "=") {
              this.setState({
                subtotal: 0,
                value: calc,
                operator: "+",
                isNewValue: true
              });
            } else {
              this.setState({
                subtotal: calc,
                value: calc,
                operator: value,
                isNewValue: true
              });
            }
          });
        } else {
          this.setState({
            subtotal: this.state.value,
            operator: value
          });
        }
        break;

      case "number":
        if (this.state.isNewValue) {
          this.setState({
            value: value,
            isNewValue: false
          });
        } else {
          this.setState({
            value: `${this.state.value}${value}`,
            isNewValue: false
          });
        }
        break;

      case "decimal":
        let string = this.state.value.toString();
        if(this.state.isNewValue){
          this.setState({
            value: `0.`,
            isNewValue: false
          })
        }else{
          if (!string.match(/\./)) {
            this.setState({
              value: `${this.state.value}.`,
              isNewValue: false
            });
          }
        }
        break;

      case "clear":
        this.setState({
          subtotal: 0,
          value: 0,
          operator: "+",
          isNewValue: true
        });
        break;
      default:
        console.log("Error!");
    }
  }

  render() {
    return ( 
      <div className = "calculator" >
        <Display value = {this.state.value}/> 
        <Keypad click = {this.handleClick}/> 
      </div>
    );
  }
}