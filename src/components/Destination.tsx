import { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import classes from "./Destination.module.css";

import moonImage from "../assets/destination/image-moon.png";
import marsImage from "../assets/destination/image-mars.png";
import europaImage from "../assets/destination/image-europa.png";
import titanImage from "../assets/destination/image-titan.png";
import StatusContext from "../store/status-context";

interface destinationProps {
  items: {
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  }[];
}

const Destination: React.FC<destinationProps> = (props) => {
  const ctx = useContext(StatusContext);
  const [animation, setAnimation] = useState(true);
  let destinationPlanet = props.items[0];

  const { destinationStatus } = ctx;

  useEffect(() => {
    const animationInterval = setTimeout(() => {
      console.log("false");
      setAnimation(false);
    }, 1500);
    setAnimation(true);
    console.log("true");
    return () => {
      clearInterval(animationInterval);
    };
  }, [destinationStatus]);

  let destinationImage;
  if (ctx.destinationStatus === "moon") {
    destinationImage = moonImage;
    destinationPlanet = props.items[0];
  }
  if (ctx.destinationStatus === "mars") {
    destinationImage = marsImage;

    destinationPlanet = props.items[1];
  }
  if (ctx.destinationStatus === "europa") {
    destinationImage = europaImage;
    destinationPlanet = props.items[2];
  }
  if (ctx.destinationStatus === "titan") {
    destinationImage = titanImage;
    destinationPlanet = props.items[3];
  }

  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.titlePage}>
        <span className={classes.sectionNumber}>01</span> Pick Your Destination
      </h2>
      <div className={classes.content}>
        <img src={destinationImage} className={classes.image} />
        <div className={classes.textBox}>
          <nav>
            <ul className={classes.planetNav}>
              <li>
                <NavLink
                  to="/destination/moon"
                  className={classes.planetLink}
                  onClick={() => ctx.setDestination("moon")}
                >
                  Moon
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/destination/mars"
                  className={classes.planetLink}
                  onClick={() => ctx.setDestination("mars")}
                >
                  Mars
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/destination/europa"
                  className={classes.planetLink}
                  onClick={() => ctx.setDestination("europa")}
                >
                  Europa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/destination/titan"
                  className={classes.planetLink}
                  onClick={() => ctx.setDestination("titan")}
                >
                  Titan
                </NavLink>
              </li>
            </ul>
          </nav>
          <h3
            className={`${classes.title} ${animation ? classes.animation : ""}`}
          >
            {destinationPlanet.name}
          </h3>
          <p className={classes.text}>{destinationPlanet.description}</p>
          <div className={classes.dataSection}>
            <div className={classes.dataBox}>
              <p className={classes.dataDescription}>AVG. DISTANCE</p>
              <p className={classes.data}>{destinationPlanet.distance}</p>
            </div>
            <div className={classes.dataBox}>
              <p className={classes.dataDescription}>EST.TRAVEL TIME</p>
              <p className={classes.data}>{destinationPlanet.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
