import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, NavLink } from "react-router-dom";
const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info navbar-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link Nav-Link-a  " to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link Nav-Link-a" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link Nav-Link-a" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link Nav-Link-a" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link Nav-Link-a" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
