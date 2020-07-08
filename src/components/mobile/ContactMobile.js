import React, { Component } from "react";
import { motion } from "framer-motion";
import facebookicon from "../../icons/facebook.png";
import githubicon from "../../icons/github.png";
import linkedinicon from "../../icons/linkedin.png";
import instagramicon from "../../icons/instagram.png";
import sent_icon from "../../PorfolioImages/sent_icon.png";
import axios from "axios";

export default class ContactMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Change input handlers
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleSubjectChange(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: true,
    });
    await axios.post("http://localhost:3001/api/message", {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    });
  }

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
          //justifyContent: "space-between",
          height: "90vh",
          width: "100%",
        }}
      >
        <h1 style={{ fontFamily: "Montserrat" }}>Contact</h1>
        <motion.form style={styles.formstyle}>
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.6 }}
            style={styles.formitem}
            type="text"
            placeholder="Name..."
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.7 }}
            style={styles.formitem}
            type="email"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.8 }}
            style={styles.formitem}
            type="text"
            placeholder="Subject..."
            value={this.state.subject}
            onChange={this.handleSubjectChange}
            required
          />
          <motion.textarea
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.9 }}
            cols="30"
            rows="10"
            placeholder="Drop me your message"
            style={styles.formitem}
            value={this.state.message}
            onChange={this.handleMessageChange}
            required
          ></motion.textarea>
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 1 }}
            id="sendbutton"
            type="submit"
            value="Send"
            onClick={this.handleSubmit}
          />
        </motion.form>
        <motion.p
          style={{ fontFamily: "Roboto" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.1 }}
        >
          Or add me directly on wassap: +31 627 193 590
        </motion.p>
        <motion.div
          style={styles.sns}
          initial={{ opacity: 0, width: "100%" }}
          animate={{ opacity: 1, width: "50%" }}
          exit={{ opacity: 0, width: "100%" }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://www.facebook.com/kenny.delapaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={facebookicon}
              alt="logo"
              whileHover={{ rotate: -10, scale: 1.1 }}
            />
          </a>
          <a
            href="https://www.instagram.com/abeldlp193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={instagramicon}
              alt="logo"
              whileHover={{ rotate: -10, scale: 1.1 }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abel-de-la-paz-73b675187/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={linkedinicon}
              alt="logo"
              whileHover={{ rotate: -10, scale: 1.1 }}
            />
          </a>
          <a
            href="https://github.com/Abeldlp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={githubicon}
              alt="logo"
              whileHover={{ rotate: -10, scale: 1.1 }}
            />
          </a>
        </motion.div>
      </motion.div>
    );

    {
      /*return (
        <motion.div
          className="secondary-screen"
          exit="out"
          animate="in"
          initial="out"
          variants={this.pageTransition}
          transition={this.pageSettings}
        >
          <h1 style={{ fontFamily: "Roboto" }}>Thank you!</h1>
          <img src={sent_icon} style={styles.sent_icon} alt="logo" />
          <h2 style={{ fontFamily: "Roboto" }}>Your message has been sent</h2>
          <h2 style={{ fontFamily: "Roboto" }}>
            I will get back to you as soon as possible
          </h2>
        </motion.div>
      ); }*/
    }
  }
}

const styles = {
  formstyle: {
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-around",
    height: "70%",
    width: "80%",
  },
  formitem: {
    padding: 10,
    margin: 10,
    outline: "none",
    borderRadius: 18,
    border: "solid 1px dodgerblue",
    resize: "none",
    fontFamily: "Roboto",
  },
  sendbutton: {
    padding: 10,
    outline: "none",
    borderRadius: 18,
    color: "white",
    backgroundColor: "dodgerblue",
    border: "none",
    cursor: "pointer",
    fontFamily: "Montserrat",
  },
  sns: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "10px",
  },
  sent_icon: {
    height: "200px",
  },
  text: {
    fontFamily: "Roboto",
  },
};
