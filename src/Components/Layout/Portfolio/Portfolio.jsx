import React, { useState } from "react";
import "./Portfolio.css";
import port1 from "../../../imgs/port1.png";
import port2 from "../../../imgs/port2.png";
import port3 from "../../../imgs/port3.png";

export default function Portfolio() {
  const [showImageBox, setShowImageBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageBox(true);
  };

  const handleCloseImageBox = () => {
    setShowImageBox(false);
  };

  return (
    <div className="mb-5 pb-3 position-relative">
      <div className="portfolio text-center">
        <h2 className="mb-3 fs-1 fw-bolder">PORTFOLIO COMPONENT</h2>
        <div className="star d-flex justify-content-center align-items-center">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star "></i>
          <div className="line ms-3"></div>
        </div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 port-img">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={port1} alt="house" width="100%" className="rounded-3" />
              <div
                onClick={() => handleImageClick(port1)}
                className="layer position-absolute start-0 top-0 h-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-solid fa-plus text-white fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port-img">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={port2} alt="house" width="100%" className="rounded-3" />
              <div
                onClick={() => handleImageClick(port2)}
                className="layer position-absolute start-0 top-0 h-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-solid fa-plus text-white fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port-img">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={port3} alt="house" width="100%" className="rounded-3" />
              <div
                onClick={() => handleImageClick(port3)}
                className="layer position-absolute start-0 top-0 h-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-solid fa-plus text-white fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port-img">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={port1} alt="house" width="100%" className="rounded-3" />
              <div
                onClick={() => handleImageClick(port1)}
                className="layer position-absolute start-0 top-0 h-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-solid fa-plus text-white fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port-img">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={port2} alt="house" width="100%" className="rounded-3" />
              <div
                onClick={() => handleImageClick(port2)}
                className="layer position-absolute start-0 top-0 h-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-solid fa-plus text-white fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port-img">
            <div className="rounded-3 overflow-hidden position-relative">
              <img src={port3} alt="house" width="100%" className="rounded-3" />
              <div
                onClick={() => handleImageClick(port3)}
                className="layer position-absolute start-0 top-0 h-100 d-flex justify-content-center align-items-center"
              >
                <i className="fa-solid fa-plus text-white fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showImageBox && (
        <div
          onClick={handleCloseImageBox}
          className="img-box w-100 h-100 d-flex justify-content-center align-items-center position-fixed top-0 left-0 bg-primary bg-opacity-25"
        >
          <img
            src={selectedImage}
            alt="img"
            width="500px"
            className="row-img"
          />
        </div>
      )}
    </div>
  );
}
