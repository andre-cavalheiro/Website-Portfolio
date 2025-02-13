import React from "react";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Home,
  Nav,
  Skills
} from "./components/index";

const App = () => {

  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
