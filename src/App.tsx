import React from "react";

import "./scss/app.scss";

import Header from "./widgets/header/ui/Header";
import Footer from "./widgets/footer/ui/Footer";
import Hero from "./widgets/hero/ui/Hero";
import Trending from "./widgets/trending/ui/Trending";
import Creative from "./widgets/creative/ui/Creative";
import Inspiration from "./widgets/inspiration/ui/Inspiration";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Hero />
        <Trending />
        <Creative />
        <Inspiration />
      </main>
      <Footer />
    </div>
  );
};

export default App;
