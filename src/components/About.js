import React, { Component } from "react";
import { motion } from "framer-motion";

import computer from "../PorfolioImages/computer.png";
import snowboard from "../PorfolioImages/Snowboard.jpg";
import guitar from "../PorfolioImages/guitar2.png";

export default class About extends Component {
  pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };

  pageSettings = {
    duration: 1,
    transition: "linear",
  };
  render() {
    return (
      <motion.div
        className="secondary-screen"
        exit="out"
        animate="in"
        initial="out"
        variants={this.pageTransition}
        transition={this.pageSettings}
      >
        <h1>Personal_Me</h1>
        <div style={styles.divleft}>
          <p>
            I love programing since the first time I tried it. I fell in love
            with web development but in my spare time I also develop videogames
            with unity, just for fun.
          </p>
          <img src={computer} style={styles.computer} alt="logo" />
        </div>
        <div style={styles.divleft}>
          <img src={snowboard} style={styles.computer} alt="logo" />
          <p>
            Yes! That is me! I love snowboarding and also spent 5 years of my
            life as a proffesional snowboarder. The sensation of going down the
            mountain and flying off every jump is just irreplacable
          </p>
        </div>
        <div style={styles.divleft}>
          <p>
            Music is something I loved since a really young age. I started
            playing guitar since I was 11 and have never stoped since then. A
            good tune is always relaxing in stressful times.
          </p>
          <img src={guitar} style={styles.guitar} alt="logo" />
        </div>
      </motion.div>
    );
  }
}

const styles = {
  divleft: {
    display: "flex",
    justifyContent: "space-around",
    width: "90%",
    height: "20%",
    padding: 20,
  },
  computer: {
    height: "100%",
    borderRadius: 10,
  },
  guitar: {
    opacity: 0.9,
    height: "100%",
  },
};
