import { Link } from "react-router-dom";

import classes from "./Header.module.css";

import { ReactComponent as Logo } from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav className={classes.navigation}>
          <ul className={classes.navigationIcons}>
            <li>
              <NavLink to="/">
                <span className={classes.bold}>00</span> Home
              </NavLink>
            </li>
            <li className={classes.active}>
              <NavLink to="/destination">
                <span className={classes.bold}>01</span> Destination
              </NavLink>
            </li>
            <li>
              <span className={classes.bold}>02</span> Crew
            </li>
            <li>
              <span className={classes.bold}>03</span> Technology
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
