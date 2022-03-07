import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <div className={classes.textBox}>
          <h1 className={classes.title}>
            So, you want to travel to
            <span className={classes.gigaText}>Space</span>
          </h1>
          <p className={classes.text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className={classes.button}>Explore</button>
      </div>
    </div>
  );
};

export default Home;
