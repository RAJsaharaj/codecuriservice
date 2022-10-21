import React from "react";
import Header from './comporent/Head/Header';
import Home from './comporent/Hero/Home';
import Features from "./comporent/Features/Features";
// import Portfolio from './comporent/Resume/Resume';
import Resume from "./comporent/Resume/Resume";
import Testimonial from "./comporent/Testimonial/Testimonial";
import Blog from "./comporent/Blog/Blog";
import Contact from "./comporent/Contact/Contact";
import Footer from "./comporent/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      {/* <Portfolio /> */}
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
