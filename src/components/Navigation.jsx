import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
          <a href="/" className="navbar-brand text-primary" >canvaMint</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Create</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">My collection</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Transfer</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;