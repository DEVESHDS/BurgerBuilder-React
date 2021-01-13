import React, { Component } from "react";
import Aux from "../HOC/Auxilliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

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
        <Toolbar drawertoggleclicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showsideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.main}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
