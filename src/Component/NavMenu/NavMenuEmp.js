import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";

export default class NavMenu extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { open } = this.state;
    return (
      <nav className="navigation">
        <button className="hamburger" onClick={this.toggle}>
          |||
        </button>
          {
            <div className={open ? "navbar show" : "navbar toggle"}>
              {/* <NavLink
                activeClassName="main-nav-active"
                className="links art"
                to={{
                  pathname:'/-home' }}
              >
               Home
              </NavLink> */}
              <NavLink
                activeClassName="main-nav-active2"
                className="links music"
                to={"/empprofile"}
              >
                My Profile
              </NavLink>
              <NavLink
                activeClassName="main-nav-active"
                className="links sport"
                to={"/e-dashboard"}
              >
                Dashboard
              </NavLink>
        
            </div>
          }
      </nav>
    );
  }
}
