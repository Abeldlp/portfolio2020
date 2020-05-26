import React, { Component } from "react";
import { motion } from "framer-motion";
import facebookicon from "../icons/facebook.png";
import githubicon from "../icons/github.png";
import linkedinicon from "../icons/linkedin.png";
import instagramicon from "../icons/instagram.png";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
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

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
        <form style={styles.formstyle}>
          <input
            style={styles.formitem}
            type="text"
            placeholder="Name..."
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <input
            style={styles.formitem}
            type="email"
            placeholder="Email..."
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <input
            style={styles.formitem}
            type="text"
            placeholder="Subject..."
            value={this.state.subject}
            onChange={this.handleSubjectChange}
            required
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Drop me your message"
            style={styles.formitem}
            value={this.state.message}
            onChange={this.handleMessageChange}
            required
          ></textarea>
          <input
            style={styles.sendbutton}
            type="submit"
            value="Send"
            onClick={this.handleSubmit}
          />
        </form>
        <p>Or add me directly on wassap: +31 627 193 590</p>
        <div style={styles.sns}>
          <a href="https://www.facebook.com/kenny.delapaz" target="_blank">
            <img src={facebookicon} />
          </a>
          <a href="https://www.instagram.com/abeldlp193/" target="_blank">
            <img src={instagramicon} />
          </a>
          <a
            href="https://www.linkedin.com/in/abel-de-la-paz-73b675187/"
            target="_blank"
          >
            <img src={linkedinicon} />
          </a>
          <a href="https://github.com/Abeldlp" target="_blank">
            <img src={githubicon} />
          </a>
        </div>
      </motion.div>
    );
  }
}

const styles = {
  formstyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "70%",
    width: "50%",
  },
  formitem: {
    padding: 10,
    outline: "none",
    borderRadius: 18,
    border: "solid 1px dodgerblue",
    resize: "none",
  },
  sendbutton: {
    padding: 10,
    outline: "none",
    borderRadius: 18,
    color: "white",
    backgroundColor: "dodgerblue",
    border: "none",
    cursor: "pointer",
  },
  sns: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "10px",
  },
};
