import React from "react";
import {
  Navbar,
  Sale,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
