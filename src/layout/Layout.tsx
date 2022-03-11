import { Fragment, useContext } from "react";
import Header from "../components/Header";

import homeImage from "../assets/home/background-home-desktop.jpg";
import destinationImage from "../assets/destination/background-destination-desktop.jpg";
import crewImage from "../assets/crew/background-crew-desktop.jpg";
import techBackImage from "../assets/technology/background-technology-desktop.jpg";

import classes from "./Layout.module.css";
import StatusContext from "../store/status-context";

const Layout: React.FC = (props) => {
  const ctx = useContext(StatusContext);

  let backgroundImage;

  if (ctx.screen === "home") {
    backgroundImage = homeImage;
  }
  if (ctx.screen === "destination") {
    backgroundImage = destinationImage;
  }
  if (ctx.screen === "crew") {
    backgroundImage = crewImage;
  }
  if (ctx.screen === "technology") {
    backgroundImage = techBackImage;
  }

  return (
    <Fragment>
      <div className={classes.bg}>
        <img src={backgroundImage} className={classes.image} />
      </div>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
