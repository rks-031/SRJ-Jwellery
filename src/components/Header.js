import React from "react";

export default function Header() {
  return (
    <div className="header my-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navy ">
        <a
          className="navbar-brand font-weight-bolder title"
          href="http://localhost:3000/"
        >
          Shri Ram Ji
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link font-weight-bold active"
                href="http://localhost:3000/gallery"
              >
                Our Store
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link font-weight-bold active"
                href="http://localhost:3000/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link font-weight-bold active"
                href="http://localhost:3000/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
}
