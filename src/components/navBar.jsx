import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {
  return (
    <nav className="navbar bg-nav navbar-expand-lg navbar-expand-d-xl navbar-expand-sm  navbar-navbar-expand-md">
      <Link className="navbar-brand navbar-brand-a" to="/">
        Vidly
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
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

export default NavBar;
