import { BrowserRouter, Route, Routes } from "react-router-dom";

import classes from "./App.module.css";

import Layout from "./layout/Layout";
import Home from "./components/Home";
import Destination from "./components/Destination";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
