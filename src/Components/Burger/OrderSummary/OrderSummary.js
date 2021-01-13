import React from "react";
import Aux from "../../HOC/Auxilliary";
import Button from "../../UI/button/button";

const ordersummary = (props) => {
  const ingredientsummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>
          {igkey}:{props.ingredients[igkey]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Here is Your Order Summary</h3>
      <p>Your Burger contain following ingredients:</p>
      <ul>{ingredientsummary}</ul>
      <p>
        <strong>Total Price:{props.price}</strong>
      </p>
      <Button btntype="Danger" clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btntype="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default ordersummary;
