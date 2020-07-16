import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import menu_button from "../../icons/menu-button.png";
import logo from "../../PorfolioImages/logo.png";

export default class SelfIntroMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.openMenuBar = this.openMenuBar.bind(this);
  }

  openMenuBar() {
    if (this.state.open) {
      this.setState({
        open: false,
      });
    } else if (!this.state.false) {
      this.setState({
        open: true,
      });
    }
  }

  render() {
    return (
      <div
        style={{
          position: "fixed",
        }}
      >
        <motion.div
          onClick={this.openMenuBar}
          style={styles.navbar_container}
          variants={variants}
          initial={{ scale: 0 }}
          animate={this.state.open ? "open" : "closed"}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <motion.img
            src={menu_button}
            alt="logo"
            variants={variants3}
            initial={{ scale: 1 }}
            animate={this.state.open ? "open" : "closed"}
            transition={{ duration: 0.1 }}
            style={{
              height: "30px",
              width: "20px",
            }}
          />
          
        </motion.div>
        <motion.div
          style={styles.container2}
          variants={variants2}
          initial={{ opacity: 0 }}
          animate={this.state.open ? "open" : "closed"}
        >
          <img
            src={logo}
            style={styles.logo}
            alt="logo"
            
          />
          <Link onClick={this.openMenuBar} style={styles.link} to="/me">
            ME
          </Link>
          <Link
            onClick={this.openMenuBar}
            style={styles.link}
            to="/about/mobile"
          >
            ABOUT
          </Link>
          <Link onClick={this.openMenuBar} style={styles.link} to="/projects">
            PROJECTS
          </Link>
          <Link
            onClick={this.openMenuBar}
            style={styles.link}
            to="/ilustrations"
          >
            ILUSTRATIONS
          </Link>
          <Link onClick={this.openMenuBar} style={styles.link} to="/contact">
            CONTACT
          </Link>
        </motion.div>
      </div>
    );
  }
}

const variants = {
  open: { scale: 40, borderRadius: "100%", backgroundColor: "dodgerblue" },
  closed: { scale: 1, borderRadius: "100%", backgroundColor: "dodgerblue" },
};

const variants2 = {
  open: { opacity: 1, pointerEvents: "auto" },
  closed: { opacity: 0, pointerEvents: "none" },
};
const variants3 = {
  open: { opacity: 0, trasition: { duration: 0 } },
  closed: { opacity: 1, transition: { delay: 0.3 } },
};

const styles = {logo: {
  width: 80,
  height: 80,
  margin: "auto",
  padding:"20px"
  
},
  navbar_container: {
    display: "flex",
    height: "50px",
    width: "50px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    borderRadius: "100%",
    position: "fixed",
    top: "20px",
    left: "20px",
    outline: "none",
  },
  container2: {
    position: "fixed",
    textAlign: "center",
    pointerEvents: "none",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Montserrat",
    padding: "20px",
    cursor: "none",
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
  },
};
