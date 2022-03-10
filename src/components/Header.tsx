import classes from "./Header.module.css";

import { ReactComponent as Logo } from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import StatusContext from "../store/status-context";

const Header = () => {
  const ctx = useContext(StatusContext);
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav className={classes.navigation}>
          <ul className={classes.navigationIcons}>
            <li className={classes.headerList}>
              <NavLink
                to="/"
                className={classes.headerLink}
                onClick={() => ctx.setScreen("home")}
              >
                <span className={classes.bold}>00</span> Home
              </NavLink>
            </li>
            <li className={classes.headerList}>
              <NavLink
                to="/destination/moon"
                className={classes.headerLink}
                onClick={() => ctx.setScreen("destination")}
              >
                <span className={classes.bold}>01</span> Destination
              </NavLink>
            </li>
            <li className={classes.headerList}>
              <span className={classes.bold}>02</span> Crew
            </li>
            <li className={classes.headerList}>
              <span className={classes.bold}>03</span> Technology
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
