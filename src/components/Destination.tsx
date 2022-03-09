import { NavLink } from "react-router-dom";
import classes from "./Destination.module.css";

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
  const moon = props.items[0];

  console.log(moon.images.png);
  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.titlePage}>
        <span className={classes.sectionNumber}>01</span> Pick Your Destination
      </h2>
      <div className={classes.content}>
        <img src={moon.images.png} className={classes.image} />
        <div className={classes.textBox}>
          <nav>
            <ul className={classes.planetNav}>
              <li>
                <NavLink to="/destination/moon" className={classes.planetLink}>
                  Moon
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination/mars" className={classes.planetLink}>
                  Mars
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/destination/europa"
                  className={classes.planetLink}
                >
                  Europa
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination/titan" className={classes.planetLink}>
                  Titan
                </NavLink>
              </li>
            </ul>
          </nav>
          <h3 className={classes.title}>{moon.name}</h3>
          <p className={classes.text}>{moon.description}</p>
          <div className={classes.dataSection}>
            <div className={classes.dataBox}>
              <p className={classes.dataDescription}>AVG. DISTANCE</p>
              <p className={classes.data}>{moon.distance}</p>
            </div>
            <div className={classes.dataBox}>
              <p className={classes.dataDescription}>EST.TRAVEL TIME</p>
              <p className={classes.data}>{moon.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
