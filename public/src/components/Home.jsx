import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Counter from "../Counter";
import Container from "./container";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Counter />
      <Container />
      <Footer />
    </>
  );
};

export default Home;
