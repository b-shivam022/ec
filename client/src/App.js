import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./components/pages/home/Home";
import SingleCard from "./components/singleCard/SingleCard";
import Login from "./components/login/Login";
// import Footer from './components/footer/Footer'
import About from "./components/pages/About";
import MyCart from "./components/mycart/MyCart";
import Error from './components/pages/Error'

const App = () => {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:cNo/:title" element={<SingleCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/MyCart" element={<MyCart />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      {/*<Footer />*/}
    </Router>
  );
};

export default App;
