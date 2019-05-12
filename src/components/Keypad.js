import React from "react";
import Button from "./Button";

export default class Keypad extends React.Component {
  render() {
    return (
      <div className="keypad">
        <Button click={this.props.click} type="number" id="one" value="1" />
        <Button click={this.props.click} type="number" id="two" value="2" />
        <Button click={this.props.click} type="number" id="three" value="3" />
        <Button click={this.props.click} type="number" id="four" value="4" />
        <Button click={this.props.click} type="number" id="five" value="5" />
        <Button click={this.props.click} type="number" id="six" value="6" />
        <Button click={this.props.click} type="number" id="seven" value="7" />
        <Button click={this.props.click} type="number" id="eight" value="8" />
        <Button click={this.props.click} type="number" id="nine" value="9" />
        <Button click={this.props.click} type="number" id="zero" value="0" />

        <Button
          click={this.props.click}
          type="decimal"
          id="decimal"
          value="."
        />

        <Button click={this.props.click} type="operator" id="add" value="+" />
        <Button
          click={this.props.click}
          type="operator"
          id="subtract"
          value="-"
        />
        <Button
          click={this.props.click}
          type="operator"
          id="multiply"
          value="*"
        />
        <Button
          click={this.props.click}
          type="operator"
          id="divide"
          value="/"
        />

        <Button click={this.props.click} type="clear" id="clear" value="A/C" />
        <Button
          click={this.props.click}
          type="operator"
          id="equals"
          value="="
        />
      </div>
    );
  }
}
