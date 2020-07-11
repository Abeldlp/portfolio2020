import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import laptop from "../PorfolioImages/Salaryphoto.png";

export default class SalarySystem extends Component {
  pageTransition = {
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0,
    },
  };

  pageSettings = {
    duration: 0.5,
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
        style={{ overflow: "auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/code" style={{ textDecoration: "none" }}>
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
          Salary Manager
        </motion.h1>
        <motion.p
          style={styles.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.8 }}
        >
          Frontend React, Backend MongoDB, Node.js and express. Fully functional
          CRUD Service to keep track of employee salary. DEPLOYED WITH HEROKU
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
            href="https://employeesalary.herokuapp.com/"
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
    width: "50%",
  },
  text: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
};
