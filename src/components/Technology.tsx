import { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import classes from "./Destination.module.css";

import launchImage from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortImage from "../assets/technology/image-spaceport-portrait.jpg";
import capsuleImage from "../assets/technology/image-space-capsule-portrait.jpg";

import StatusContext from "../store/status-context";

interface technologyProps {
  items: {
    name: string;
    images: { portrait: string; landscape: string };
    description: string;
  }[];
}

const Technology: React.FC<technologyProps> = (props) => {
  const ctx = useContext(StatusContext);
  const [animation, setAnimation] = useState(true);
  let technology = props.items[0];

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

  let techImage;
  if (ctx.tech === "launch") {
    techImage = launchImage;
    technology = props.items[0];
  }
  if (ctx.tech === "spacePort") {
    techImage = spacePortImage;

    technology = props.items[1];
  }
  if (ctx.tech === "capsule") {
    techImage = capsuleImage;
    technology = props.items[2];
  }

  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.titlePage}>
        <span className={classes.sectionNumber}>03</span> Space Launch 101
      </h2>
      <div className={classes.content}>
        <img src={techImage} className={classes.image} />
        <div className={classes.textBox}>
          <nav>
            <ul className={classes.planetNav}>
              <li>
                <NavLink
                  to="/technology/launch"
                  className={classes.planetLink}
                  onClick={() => ctx.setTechnology("launch")}
                >
                  Moon
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology/spaceport"
                  className={classes.planetLink}
                  onClick={() => ctx.setTechnology("spacePort")}
                >
                  Mars
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology/capsule"
                  className={classes.planetLink}
                  onClick={() => ctx.setTechnology("capsule")}
                >
                  Europa
                </NavLink>
              </li>
            </ul>
          </nav>
          <h3
            className={`${classes.title} ${animation ? classes.animation : ""}`}
          >
            {technology.name}
          </h3>
          <p className={classes.text}>{technology.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
