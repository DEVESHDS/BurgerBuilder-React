import React, { Component } from "react";
import Aux from "../../HOC/Auxilliary";
import Burger from "../../../Components/Burger/Burger";
import BuildControls from "../../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../../Components/UI/Modal/Modal";
import OrderSummary from "../../../Components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
  salad: 10,
  bacon: 15,
  meat: 20,
  cheese: 25,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalprice: 20,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const updatedcount = oldcount + 1;
    const updatedingredients = { ...this.state.ingredients };
    updatedingredients[type] = updatedcount;
    const priceaddition = INGREDIENT_PRICE[type];
    const oldprice = this.state.totalprice;
    const newprice = oldprice + priceaddition;
    this.setState({ totalprice: newprice, ingredients: updatedingredients });
    this.updatePurchaseState(updatedingredients);
  };

  removeIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    if (oldcount <= 0) {
      return;
    }
    const updatedcount = oldcount - 1;
    const updatedingredients = { ...this.state.ingredients };
    updatedingredients[type] = updatedcount;
    const pricededuction = INGREDIENT_PRICE[type];
    const oldprice = this.state.totalprice;
    const newprice = oldprice - pricededuction;
    this.setState({ totalprice: newprice, ingredients: updatedingredients });
    this.updatePurchaseState(updatedingredients);
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  render() {
    const disabledifo = { ...this.state.ingredients };
    for (let key in disabledifo) {
      disabledifo[key] = disabledifo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledifo}
          price={this.state.totalprice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
