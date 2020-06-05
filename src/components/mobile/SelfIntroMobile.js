import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SelfIntroMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbar_hidden: true,
      button: "Menu",
    };

    this.openMenuBar = this.openMenuBar.bind(this);
  }

  openMenuBar() {
    if (this.state.navbar_hidden) {
      this.setState({
        navbar_hidden: false,
        button: "Close",
      });
    } else if (!this.state.navbar_hidden) {
      this.setState({
        navbar_hidden: true,
        button: "Menu",
      });
    }
  }

  render() {
    if (!this.state.navbar_hidden) {
      return (
        <div style={styles.navbar_container}>
          <div style={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/me">ME</Link>
            <Link to="/about">About</Link>
            <Link to="/Code">Code</Link>
            <Link to="/conact">Contact</Link>
          </div>
          <div style={styles.navbar_button} onClick={this.openMenuBar}>
            {this.state.button}
          </div>
        </div>
      );
    } else if (this.state.navbar_hidden) {
      return (
        <div className={styles.navbar_container}>
          <div style={styles.navbar_button} onClick={this.openMenuBar}>
            {this.state.button}
          </div>
        </div>
      );
    }
  }
}

const styles = {
  navbar_container: {
    display: "flex",
    height: "50vh",
    width: "50%",
    justifyContent: "space-around",
    backgroundColor: "skyblue",
    borderRadius: "0px 0px 18px 0px",
    boxShadow: "0px 0px 27px 5px grey",
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-around",
  },
  navbar_button: {
    height: 50,
    width: 50,
    backgroundColor: "dodgerblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 3,
    borderRadius: "100%",
  },
};
