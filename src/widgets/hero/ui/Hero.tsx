import React from "react";

import bedroomImg from "@/assets/img/01 hero/bedroom.png";
import kitchenImg from "@/assets/img/01 hero/kitchen.png";
import livingroomImg from "@/assets/img/01 hero/living room.png";
import electronicsImg from "@/assets/img/01 hero/electronics.jpg";

import styles from "./Hero.module.scss";
import Template from "./Template/Template";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={[styles.container && "", "_container"].join(" ")}>
        <div className={styles.content}>
          <Template
            img={livingroomImg}
            alt={"living room image"}
            header={"Live Comfortably"}
            size={"x4"}
          />
          <Template
            img={bedroomImg}
            alt={"bedroom image"}
            header={"Bedroom"}
            size={"x2"}
          />
          <Template
            img={kitchenImg}
            alt={"kitchen image"}
            header={"Kitchen"}
            size={"x1"}
          />
          <Template
            img={electronicsImg}
            alt={"electronics image"}
            header={"Electronics"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
