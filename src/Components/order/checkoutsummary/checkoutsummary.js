import React from "react";

import Burger from "../../Burger/Burger";

import Button from "../../UI/button/button";

import classes from "./checkoutsummary.module.css";

const checkoutsummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div style={{ margin: "auto", width: "100%" }}>
        <h1>We Hope That The Burger Tastes Well</h1>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btntype="Danger" clicked={props.checkoutcancelled}>
        CANCEL
      </Button>
      <Button btntype="Success" clicked={props.checkoutcontinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutsummary;
