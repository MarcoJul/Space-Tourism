import { Fragment } from "react";
import Header from "../components/Header";

import Image from "../assets/home/background-home-desktop.jpg";

import classes from "./Layout.module.css";

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <div className={classes.bg}>
        <img src={Image} className={classes.image} />
      </div>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
