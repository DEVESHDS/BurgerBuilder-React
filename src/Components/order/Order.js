import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  let ingredients = [];

  for (let ingredientname in props.ingredients) {
    ingredients.push({
      name: ingredientname,
      amount: props.ingredients[ingredientname],
    });
  }

  const ingredientoutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          margin: "0 8px",
          padding: "5px",
          display: "inline",
          border: "1px solid #ccc",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients:{ingredientoutput}</p>

      <p>
        Price:<strong>{props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
