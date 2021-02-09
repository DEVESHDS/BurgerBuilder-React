import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../HOC/Auxilliary/Auxilliary";
import Burger from "../../../Components/Burger/Burger";
import BuildControls from "../../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../../Components/UI/Modal/Modal";
import OrderSummary from "../../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/index";

export class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredient();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onsetAuthRedirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };
  purchasecancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchasecontinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };
  render() {
    const disabledifo = { ...this.props.ings };
    for (let key in disabledifo) {
      disabledifo[key] = disabledifo[key] <= 0;
    }
    let burger = this.props.error ? (
      <p>Ingredients cant be loaded</p>
    ) : (
      <Spinner />
    );
    let ordersummary = null;
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledifo}
            price={this.props.price}
            isAuth={this.props.isAuthenticated}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      ordersummary = (
        <OrderSummary
          price={this.props.price}
          ingredients={this.props.ings}
          purchaseCancel={this.purchasecancelHandler}
          purchaseContinue={this.purchasecontinueHandler}
        />
      );
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalclosed={this.purchasecancelHandler}
        >
          {ordersummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalprice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredient: () => dispatch(actions.initIngredient()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onsetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
