import { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import classes from "./Crew.module.css";

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
        <span className={classes.sectionNumber}>02</span> Meet your crew
      </h2>
      <div className={classes.content}>
        <div className={classes.textBox}>
          <p className={classes.text}>{crewMember.role}</p>
          <h3
            className={`${classes.title} ${animation ? classes.animation : ""}`}
          >
            {crewMember.name}
          </h3>
          <div className={classes.dataSection}>
            <p className={classes.data}>{crewMember.bio}</p>
          </div>
          <nav>
            <ul className={classes.planetNav}>
              <li>
                <NavLink
                  to="/crew/douglashurley"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Douglas")}
                >
                  <div className={classes.circle}></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/crew/markshuttleworth"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Mark")}
                >
                  <div className={classes.circle}></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/crew/victorglover"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Victor")}
                >
                  <div className={classes.circle}></div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/crew/anoushehsunari"
                  className={classes.planetLink}
                  onClick={() => ctx.setCrew("Anousheh")}
                >
                  <div className={classes.circle}></div>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <img src={crewImage} className={classes.image} />
      </div>
    </div>
  );
};

export default Crew;
