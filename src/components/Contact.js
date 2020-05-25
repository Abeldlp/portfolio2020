import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Contact extends Component {
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
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto
          laboriosam sint nemo porro error, nostrum soluta voluptates, itaque
          consectetur aliquam enim natus hic saepe dolorum sit alias ullam
          doloribus odit reiciendis! Magnam, temporibus?
        </p>
      </motion.div>
    );
  }
}
