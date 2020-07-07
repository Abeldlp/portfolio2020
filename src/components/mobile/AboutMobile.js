import React, { Component } from "react";
import { motion } from "framer-motion";

import computer from "../../PorfolioImages/computer.png";
import snowboard from "../../PorfolioImages/Snowboardcompressed.jpg";
//import guitar from "../PorfolioImages/guitar2.png";
import languages from "../../PorfolioImages/languages.png";

import serMe from "../../PorfolioImages/no-background-big-touched.png";

export default class AboutMobile extends Component {
  pageTransition = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-100%",
    },
  };

  pageSettings = {
    duration: 0.5,
    transition: "linear",
  };
  render() {
    return (
      <motion.div
        exit="out"
        animate="in"
        initial="out"
        variants={this.pageTransition}
        transition={this.pageSettings}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <h1 style={{ fontFamily: "Montserrat", textAlign: "center" }}>
          Personal Info
          <span style={{ color: "dodgerblue", fontSize: "60px" }}>.</span>
        </h1>

        <motion.img
          src={serMe}
          style={styles.serMe}
          alt="logo"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.6 }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <strong>Abel de la Paz (AbelDLP)</strong>
        </motion.p>
        <motion.p
          style={styles.pintro}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
        >
          I was born in Spain and raised in Tokyo. This gave me the oportunity
          to think outside the box, since I have never been in a box.
        </motion.p>
        {/*<motion.div
          style={styles.divleft}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1.2 }}
        ></motion.div> */}

        <motion.div
          style={styles.divright}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ delay: 0.9 }}
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
          transition={{ delay: 0.9 }}
        >
          <img src={computer} style={styles.computer} alt="logo" />
          <p style={styles.p}>
            Apart from web development, I also develop games for fun. (Unity,
            C#)
          </p>
        </motion.div>
        <motion.h3
          style={{
            fontFamily: "Roboto",
            width: "90%",
            margin: "auto",
            textAlign: "center",
            paddingTop: "10px",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.9 }}
        >
          I love Snowboarding
        </motion.h3>
        <motion.div
          style={styles.divbottom}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.9 }}
        >
          <img src={snowboard} style={styles.snowboard} alt="logo" />
          <p style={styles.pintro}>
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "90%",
    margin: "auto",
    padding: 20,
    marginBottom: 15,
    borderBottom: "1.5px solid dodgerblue",
    overflow: "hidden",
    backgroundColor: "grey",
  },
  divright: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: "auto",
    marginBottom: 0,
  },
  divbottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    padding: 20,
    margin: "auto",
    
  },
  languages: {
    height: "50px",
    opacity: 0.8,
    position: "relative",
    zIndex: -1,
  },
  computer: {
    height: "50px",
    borderRadius: 10,
  },
  snowboard: {
    width: "100%",
    borderRadius: "5px",
    boxShadow: "0px 5px 10px 2px lightgrey",
  },
  p: {
    width: "60%",
    padding: "0px 20px",
    fontFamily: "Roboto",
    textAlign: "left",
  },
  pintro: {
    width: "90%",
    padding: "0px 20px",
    fontFamily: "Roboto",
    textAlign: "left",
    borderBottom: "1.5px solid dodgerblue",
    paddingBottom: "20px",
  },

  serMe: {
    width: "200px",
    borderRadius: "100%",
    position: "relative",
    zIndex: -1,
    boxShadow: "0px 5px 10px 2px lightgrey",
    margin: "auto",
  },
};
