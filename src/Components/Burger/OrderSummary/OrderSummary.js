import React, { Component } from "react";
import Aux from "../../HOC/Auxilliary/Auxilliary";
import Button from "../../UI/button/button";
class OrderSummary extends Component {
  render() {
    const ingredientsummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>
              {igkey}:{this.props.ingredients[igkey]}
            </span>
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Here is Your Order Summary</h3>
        <p>Your Burger contain following ingredients:</p>
        <ul>{ingredientsummary}</ul>
        <p>
          <strong>Total Price:{this.props.price}</strong>
        </p>
        <Button btntype="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btntype="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
