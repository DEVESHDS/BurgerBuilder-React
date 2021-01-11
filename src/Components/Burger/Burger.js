import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngrdient";

const burger = (props) => {
  let transformedingredients = [];
  const ingredientname = Object.keys(props.ingredients);
  for (let k = 0; k < ingredientname.length; k++) {
    let name = ingredientname[k];
    let num = props.ingredients[name];
    for (let j = 0; j < num; j++) {
      transformedingredients.push(
        <BurgerIngredient key={name + j} type={name} />
      );
    }
  }
  if (transformedingredients.length === 0) {
    transformedingredients = <p>Please start adding ingredient</p>;
  }
  // console.log(transformedingredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
