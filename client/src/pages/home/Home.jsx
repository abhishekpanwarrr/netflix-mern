import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Features from "./components/Features";
import Showcases from "./components/Showcases";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

const Home = () => {

  return (
    <>
      <Navbar />
      <Features />
      <Showcases />
      <Questions />
      <Footer />
    </>
  );
};

export default Home;
