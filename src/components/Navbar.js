/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "../styles/navbar.scss";
import "../styles.scss";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <div className="bg-image">
        <nav className="navigation">
          <a href="/" className="brand-name">
            <img src={require("../assets/images/logo.png")} className="logo" />
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <Link to="history" smooth={true} duration={500}>
                  <NavLink to="/history">01. History</NavLink>
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={500}>
                  <NavLink to="/team">02. Team</NavLink>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <img
          className="mobile-show"
          src={require("../assets/images/mobile-view.png")}
          style={{ visibility: "hidden" }}
        />
      </div>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <img src={require("../assets/images/logo.png")} className="logo" />
        </a>
        <h4 className="logo-title">
          <span className="logo-text-1">LOSANGELES</span>
          <br className="footer-break" />
          <span className="logo-text-2">MOUNTAINS</span>
        </h4>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className="carousel-menu">
            <li>
              <Link to="history" smooth={true} duration={500}>
                <NavLink to="/history">01. History</NavLink>
              </Link>
            </li>
            <li>
              <Link to="team" smooth={true} duration={500}>
                <NavLink to="/team">02. Team</NavLink>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
