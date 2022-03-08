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
      <h2 className={classes.titlePage}>01 Pick Your Destination</h2>

      <div className={classes.content}>
        <img src={moon.images.png} className={classes.image} />
        <div className={classes.textBox}>
          <h3 className={classes.title}>{moon.name}</h3>
          <p className={classes.text}>{moon.description}</p>
          <p>{moon.distance}</p>
          <p>{moon.travel}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
