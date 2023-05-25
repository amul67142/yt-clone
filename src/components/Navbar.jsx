import React from "react";
import yt from "./yt.png";
import { Link } from "react-router-dom";

const NAvbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
        <Link to="/" ><img className="nav-img" src={yt} alt="img" width="100" height="90" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link ntxt" aria-current="page" href="/">
                  <span class="material-icons navico">video_call</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ntxt" aria-current="page" href="/">
                  <span class="material-icons navico">notifications_none</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ntxt" href="/">
                  <span class="material-icons navico">account_circle</span>
                </a>
              </li>
            </ul>
            <form
              className="d-flex navbar-form col-lg-4 mx-lg-auto order-lg-first mb-0"
              role="search"
            >
              <input
                className="form-control me-2 rounded-pill form  "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-search " type="submit">
                <span className="material-icons search-ico">search</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NAvbar;
