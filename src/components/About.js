import React, { Component } from "react";
import { motion } from "framer-motion";

import computer from "../PorfolioImages/computer.png";
import snowboard from "../PorfolioImages/Snowboardcompressed.jpg";
//import guitar from "../PorfolioImages/guitar2.png";
import languages from "../PorfolioImages/languages.png";

import serMe from "../PorfolioImages/no-background-big-touched.png";

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
        <h1 style={{ fontFamily: "Montserrat" }}>
          Personal Info
          <span style={{ color: "dodgerblue", fontSize: "60px" }}>.</span>
        </h1>
        <motion.div style={styles.divleft}>
          <motion.img
            src={serMe}
            style={styles.serMe}
            alt="logo"
            initial={{ transform: "rotate(-180deg)" }}
            animate={{ transform: "rotate(0deg)" }}
            exit={{ transform: "rotate(-180deg)" }}
            transition={{ duration: 1 }}
          />
          <motion.p
            style={styles.p}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1.1 }}
          >
            <strong>Abel de la Paz (AbelDLP)</strong>
            <br />
            <br /> I was born in Spain and raised in Tokyo. This gave me the
            oportunity to think outside the box, since I have never been in a
            box.
          </motion.p>
        </motion.div>

        <motion.div
          style={styles.divright}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ delay: 1.1 }}
        >
          <img src={languages} style={styles.languages} alt="logo" />
          <p style={styles.p}>
            I speak English, Japanese, Spanish, French, some Chinese and a bit
            of Dutch.
          </p>
        </motion.div>
        <motion.div
          style={styles.divright}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ delay: 1.1 }}
        >
          <img src={computer} style={styles.computer} alt="logo" />
          <p style={styles.p}>
            Apart from web development, I also develop games for fun. (Unity,
            C#)
          </p>
        </motion.div>
        <motion.h3
          style={{ fontFamily: "Roboto" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 1.2 }}
        >
          I love Snowboarding
        </motion.h3>
        <motion.div
          style={styles.divbottom}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 1.3 }}
        >
          <img src={snowboard} style={styles.snowboard} alt="logo" />
          <p style={styles.p}>
            Besides working, I like to stay active. The best way for me to stay
            active is Snowbarding. Luckily I had the chance to spend 4 years of
            my life as a profesional snowboarder in Japan. This photo was taken
            in Japan, Hakuba ski resort. <br />
            長野県白馬47スキー場
          </p>
        </motion.div>
        {/* 
        <div style={styles.divleft}>
          <p style={styles.p}>
            Music is something I loved since a really young age. I started
            playing guitar since I was 11 and have never stoped since then. A
            good tune is always relaxing in stressful times.
          </p>
          <img src={guitar} style={styles.guitar} alt="logo" />
        </div>
        */}
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
    marginBottom: 15,
    borderBottom: "1.5px solid dodgerblue",
  },
  divright: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    minHeight: "20%",
    marginBottom: 0,
  },
  divbottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    minHeight: "50%",
    padding: 20,
    marginBottom: 15,
    borderBottom: "1.5px solid dodgerblue",
  },
  computer: {
    height: "40%",
    borderRadius: 10,
  },
  snowboard: {
    height: "60%",
    borderRadius: "5px",
    boxShadow: "0px 5px 10px 2px lightgrey",
  },
  p: {
    width: "70%",
    padding: "0px 20px",
    fontFamily: "Roboto",
    textAlign: "left",
  },
  languages: {
    height: "70%",
    opacity: 0.8,
  },
  serMe: {
    height: "100%",
    borderRadius: "100%",
    boxShadow: "0px 5px 10px 2px lightgrey",
  },
};
