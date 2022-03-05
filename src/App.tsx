import classes from "./App.module.css";

import Image from "./assets/home/background-home-desktop.jpg";

import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <img src={Image} className={classes.background} />
      <Header />
      <h1>Space</h1>
    </div>
  );
};

export default App;
