import React from "react";
import "./Home.css";
import avatar from "../../../imgs/avatar.jpg";

export default function Home() {
  return (
    <div className="home d-flex align-items-center flex-column">
      <img src={avatar} alt="avatar" width="250px" className="mb-3 mt-5 pt-5" />
      <h2 className="text-white mb-3 fs-1 fw-bolder">START FRAMEWORK</h2>
      <div className="star d-flex justify-content-center align-items-center">
        <div className="line me-3 text-white bg-white"></div>
        <i className="fa-solid fa-star text-white"></i>
        <div className="line ms-3 text-white bg-white"></div>
      </div>
      <div className="div">
        <p className="text-white mt-3">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}
