import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about d-flex align-items-center flex-column">
      <h2 className="text-white mb-3 fs-1 fw-bolder">ABOUT COMPONENT</h2>
      <div className="star d-flex justify-content-center align-items-center">
        <div className="line me-3 text-white bg-white"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line ms-3 text-white bg-white"></div>
      </div>
      <div className="container">
        <div className="row px-5">
          <div className="col-md-6 ps-md-5">
            <p className="text-white mt-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6 pe-md-5">
            <p className="text-white mt-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
