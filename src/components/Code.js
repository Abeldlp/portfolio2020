import React, { Component } from "react";
import { motion } from "framer-motion";

//IMAGES IMPORT HOLDER
import html from "../PorfolioImages/html.png";
import css from "../PorfolioImages/css.png";
import javascript from "../PorfolioImages/javascript.png";
import mongo from "../PorfolioImages/mongo.png";
import node from "../PorfolioImages/node.png";
import reactimage from "../PorfolioImages/react.png";

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);

    this.state = {
      projects: [
        {
          name: "INTRO",
          backorFront: "Frontend",
          icons: [{ icon: html }, { icon: css }],
        },
      ],
    };
  }

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
    staggerChildren: 0.1,
  };

  handleHover(e) {
    e.target.style.boxShadow = "0px 10px 12px 0px rgba(0,0,0,0.5)";
    e.target.style.transform = "translateY(-5px)";
  }
  handleHoverOut(e) {
    e.target.style.boxShadow = "0px 3px 5px 0px rgba(0,0,0,0.5)";
    e.target.style.transform = "translateY(5px)";
  }

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
        <h1>CodePage</h1>
        <p>
          There are pages within this code section that will be visible. There
          are others that you will only be able to see the code pushed to
          github.
        </p>
        <div style={styles.main_container}>
          {/*
          {this.state.projects.map((project) => (
            <div
              style={styles.secondary_container}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHoverOut}
            >
              {project.name}
              <p>{project.backorFront}</p>
              <div style={{ display: "flex" }}>
                {this.state.projects.icons.map((icon) => (
                  <img src={icon} style={styles.icon} alt="logo" />
                ))}
              </div>
            </div>
          ))}*/}

          <div
            style={styles.secondary_container}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHoverOut}
          >
            FITNESS RECORD
            <p>frontend - backend</p>
            <div style={{ display: "flex" }}>
              <img src={reactimage} style={styles.icon} alt="logo" />
              <img src={mongo} style={styles.icon} alt="logo" />
              <img src={node} style={styles.icon} alt="logo" />
            </div>
          </div>
          <div
            style={styles.secondary_container}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHoverOut}
          >
            SCHOOL WEBSITE
            <p>frontend - backend</p>
            <div style={{ display: "flex" }}>
              <img src={html} style={styles.icon} alt="logo" />
              <img src={css} style={styles.icon} alt="logo" />
            </div>
          </div>
          <div
            style={styles.secondary_container}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHoverOut}
          >
            CONSTRUCTION
            <p>frontend</p>
            <div style={{ display: "flex" }}>
              <img src={html} style={styles.icon} alt="logo" />
              <img src={css} style={styles.icon} alt="logo" />
              <img src={javascript} style={styles.icon} alt="logo" />
            </div>
          </div>
          <div
            style={styles.secondary_container}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHoverOut}
          >
            JAB
            <p>backend</p>
            <div style={{ display: "flex" }}>
              <img src={node} style={styles.icon} alt="logo" />
              <img src={mongo} style={styles.icon} alt="logo" />
            </div>
          </div>
          <div
            style={styles.secondary_container}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHoverOut}
          >
            Project 1
          </div>
          <div
            style={styles.secondary_container}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHoverOut}
          >
            Project 1
          </div>
        </div>
      </motion.div>
    );
  }
}

const styles = {
  main_container: {
    display: "flex",
    justifyContent: "space-around",
    alingItems: "center",
    height: "100%",
    width: "80%",
    flexWrap: "wrap",
  },
  secondary_container: {
    width: "30%",
    height: "30%",
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all ease-in-out 0.2s",
    boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.5)",
  },
  icon: {
    height: "30px",
  },
};
