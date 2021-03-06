import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../Auxilliary/Auxilliary";
import classes from "./Layout.module.css";
import Toolbar from "../../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../../Components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showsideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showsideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showsideDrawer: !prevState.showsideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          drawertoggleclicked={this.sideDrawerToggleHandler}
          isAuth={this.props.isAuthenticated}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showsideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.main}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
