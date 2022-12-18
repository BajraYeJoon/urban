import React from "react";
import {
  Navbar,
  Sale,
  Slider,
  Categories,
  Products,
  Newsletter,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Sale />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
