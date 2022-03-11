import { BrowserRouter, Route, Routes } from "react-router-dom";

import classes from "./App.module.css";

import Layout from "./layout/Layout";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

import data from "./data.json";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/destination/:destination"
            element={<Destination items={data.destinations} />}
          ></Route>
          <Route
            path="/crew/:crew"
            element={<Crew items={data.crew} />}
          ></Route>
          <Route
            path="/technology/:technology"
            element={<Technology items={data.technology} />}
          ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
