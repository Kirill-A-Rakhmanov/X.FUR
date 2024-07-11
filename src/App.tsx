import React from "react";

import "./scss/app.scss";

import Header from "./widgets/header/ui/Header";
import Footer from "./widgets/footer/ui/Footer";
import Hero from "./widgets/hero/ui/Hero";
import Trending from "./widgets/trending/ui/Trending";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Hero />
        <Trending />
      </main>
      <Footer />
    </div>
  );
};

export default App;
