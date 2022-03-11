import { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import classes from "./Destination.module.css";

import markImage from "../assets/crew/image-mark-shuttleworth.png";
import douglasImage from "../assets/crew/image-douglas-hurley.png";
import anoushehImage from "../assets/crew/image-anousheh-ansari.png";
import victorImage from "../assets/crew/image-victor-glover.png";
import StatusContext from "../store/status-context";

interface crewProps {
  items: {
    name: string;
    images: { png: string; webp: string };
    role: string;
    bio: string;
  }[];
}

const Crew: React.FC<crewProps> = (props) => {
  const ctx = useContext(StatusContext);
  const [animation, setAnimation] = useState(true);
  let crewMember = props.items[0];

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

  let crewImage;
  if (ctx.crewStatus === "Douglas") {
    crewImage = douglasImage;
    crewMember = props.items[0];
  }
  if (ctx.crewStatus === "Mark") {
    crewImage = markImage;

    crewMember = props.items[1];
  }
  if (ctx.crewStatus === "Victor") {
    crewImage = victorImage;
    crewMember = props.items[2];
  }
  if (ctx.crewStatus === "Anousheh") {
    crewImage = anoushehImage;
    crewMember = props.items[3];
  }

  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.titlePage}>
        <span className={classes.sectionNumber}>01</span> Pick Your Destination
      </h2>
      <div className={classes.content}>
        <img src={crewImage} className={classes.image} />
        <div className={classes.textBox}>
          <nav>
            <ul className={classes.planetNav}>
              <li>
                <NavLink
                  to="/crew/douglashurley"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Douglas")}
                >
                  Moon
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/crew/markshuttleworth"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Mark")}
                >
                  Mars
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/crew/victorglover"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Victor")}
                >
                  Europa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/crew/anoushehsunari"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Anousheh")}
                >
                  Titan
                </NavLink>
              </li>
            </ul>
          </nav>
          <h3
            className={`${classes.title} ${animation ? classes.animation : ""}`}
          >
            {crewMember.name}
          </h3>
          <p className={classes.text}>{crewMember.role}</p>
          <div className={classes.dataSection}>
            <div className={classes.dataBox}>
              <p className={classes.dataDescription}>AVG. DISTANCE</p>
              <p className={classes.data}>{crewMember.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
