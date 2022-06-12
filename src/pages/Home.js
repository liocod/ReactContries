import React from "react";
import Countries from "../Components/Countries";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
