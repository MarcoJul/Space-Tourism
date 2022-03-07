import { BrowserRouter, Route, Routes } from "react-router-dom";

import classes from "./App.module.css";

import Layout from "./layout/Layout";
import Home from "./components/Home";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
