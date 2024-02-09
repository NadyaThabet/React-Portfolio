import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-box d-flex mx-5">
          <div className="footer-content">
            <h3 className="footer-h3">LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="footer-content d-flex flex-column align-items-center">
            <h3 className="footer-h3">AROUND THE WEB</h3>
            <div className="social d-flex flex-row justify-content-evenly mt-2">
              <div className="fb d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-facebook-f text-white"></i>
              </div>
              <div className="twtr d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="linked d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="globe d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <h3 className="footer-h3">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="copy text-white text-center p-3">
        <div>
          <span>Copyrights 2024. Designed by </span>
          <span className="name-span fst-italic">
            Nadia Thabet
            <span className="heart"></span>
          </span>
        </div>
        <div>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
