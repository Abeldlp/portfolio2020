import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import laptop from "../../PorfolioImages/ConstructionPhoto.png";

export default class ConstructionMobile extends Component {
  pageTransition = {
    in: {
      opacity: 1,
      //scale: 1,
      y : 0
    },
    out: {
      opacity: 0,
      //scale: 0,
      y: "100%"
    },
  };

  pageSettings = {
    duration: 0.5,
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
            //justifyContent: "space-between",
            width: "100%",
          }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <p
              style={{
                fontFamily: "Roboto",
                color: "dodgerblue",
                fontWeight: "bold",
                letterSpacing: "1px",
                padding: "10px",
              }}
            >
              Back
            </p>
          </Link>
        </motion.div>
        <img src={laptop} alt="logo" style={styles.image} />
        <motion.h1
          style={{ fontFamily: "Montserrat" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          Construction FJD
        </motion.h1>
        <motion.p
          style={styles.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
        >
          Local business website. Frontend React, backend Node.js Nodemailer framework.
          Easy looking but strong design.
          DEPLOYED WITH HEROKU
        </motion.p>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "60%",
          }}
        >
          <motion.a
            href="https://constructionfjd.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.9 }}
            style={{
              fontFamily: "Roboto",
              color: "white",
              textDecoration: "none",
              backgroundColor: "dodgerblue",
              padding: "10px",
            }}
          >
            View Live website
          </motion.a>
        </motion.div>
      </motion.div>
    );
  }
}

const styles = {
  image: {
    width: "80%",
    paddingTop:"20%"
  },
  text: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
};
