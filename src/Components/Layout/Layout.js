import React from "react";
import Aux from "../HOC/Auxilliary";
import classes from "./Layout.module.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Side Drawer, BackDrawer</div>
    <main className={classes.main}>{props.children}</main>
  </Aux>
);

export default Layout;
