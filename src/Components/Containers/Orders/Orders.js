import React, { Component } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import Order from "../../order/Order";
import axios from "../../axios-order";
import * as actions from "../../../store/actions/index";
import Spinner from "../../UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onfetchOrder(this.props.token, this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      // console.log(this.props.orders);
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }

    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchOrder: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
