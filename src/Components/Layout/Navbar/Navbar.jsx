import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [pathName, setPathName] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollDirection(currentScrollPos > 0 ? "down" : "up");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          scrollDirection === "up" ? "py-4" : ""
        } fixed-top`}
      >
        <div className="container">
          <Link
            onClick={() => {
              setPathName("/");
            }}
            className="navbar-brand text-white fs-2 text-uppercase fw-bolder"
            to="/"
          >
            React Portfolio
          </Link>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-baseline">
              <li className="nav-item me-3">
                <Link
                  onClick={() => {
                    setPathName("/about");
                  }}
                  className={
                    pathName === "/about"
                      ? "active nav-link text-white fw-bold mt-md-0 mt-3 px-2 rounded-3 text-decoration-none"
                      : "nav-link text-white fw-bold mt-md-0 mt-3 px-2 text-decoration-none"
                  }
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  onClick={() => {
                    setPathName("/portfolio");
                  }}
                  className={
                    pathName === "/portfolio"
                      ? "active nav-link text-white fw-bold mt-md-0 mt-3 px-2 rounded-3 text-decoration-none"
                      : "nav-link text-white fw-bold mt-md-0 mt-3 px-2 text-decoration-none"
                  }
                  to="/portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  onClick={() => {
                    setPathName("/contact");
                  }}
                  className={
                    pathName === "/contact"
                      ? "active nav-link text-white fw-bold mt-md-0 mt-3 px-2 rounded-3 text-decoration-none"
                      : "nav-link text-white fw-bold mt-md-0 mt-3 px-2 text-decoration-none"
                  }
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
