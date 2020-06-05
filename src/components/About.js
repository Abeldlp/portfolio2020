import React, { Component } from "react";
import { motion } from "framer-motion";

import computer from "../PorfolioImages/computer.png";
import snowboard from "../PorfolioImages/Snowboard.jpg";
import guitar from "../PorfolioImages/guitar2.png";
import languages from "../PorfolioImages/languages.png";

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
          <img src={languages} style={styles.languages} alt="logo" />
          <p style={styles.p}>
            Languages is one of my favorite things to learn. Currently I speak
            English, Spanish, Japanese, French, Chinese and a bit of Dutch
          </p>
        </div>
        <div style={styles.divleft}>
          <p style={styles.p}>
            I love programing since the first time I tried it. I fell in love
            with web development but in my spare time I also develop videogames
            with unity, just for fun.
          </p>
          <img src={computer} style={styles.computer} alt="logo" />
        </div>
        <div style={styles.divleft}>
          <img src={snowboard} style={styles.computer} alt="logo" />
          <p style={styles.p}>
            Yes! That is me! I love snowboarding and also spent 5 years of my
            life as a proffesional snowboarder. The sensation of going down the
            mountain and flying off every jump is just irreplacable
          </p>
        </div>
        <div style={styles.divleft}>
          <p style={styles.p}>
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
    alignItems: "center",
    width: "80%",
    minHeight: "20%",
    padding: 20,
    marginBottom: 10,
    borderRadius: 18,
  },
  computer: {
    height: "100%",
    borderRadius: 10,
  },
  guitar: {
    opacity: 0.9,
    width: "30%",
  },
  p: {
    width: "70%",
    padding: "0px 20px",
  },
  languages: {
    height: "100%",
    opacity: 0.8,
  },
};
