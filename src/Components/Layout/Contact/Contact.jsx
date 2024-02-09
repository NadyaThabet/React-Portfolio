import React from "react";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container contact text-center">
      <h2 className="mb-3 fs-1 fw-bolder">CONATCT SECTION</h2>
      <div className="star d-flex justify-content-center align-items-center">
        <div className="line me-3"></div>
        <i className="fa-solid fa-star "></i>
        <div className="line ms-3"></div>
      </div>
      <form action="" className="w-75 p-3 mx-auto mt-5 text-start">
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 inpt mt-4"
            id="formGroupExampleInput"
            placeholder="userName"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 inpt mt-4"
            id="formGroupExampleInput2"
            placeholder="userAge"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 inpt mt-4"
            id="formGroupExampleInput"
            placeholder="userEmail"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 border-bottom py-3 inpt mt-4"
            id="formGroupExampleInput2"
            placeholder="userPassword"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn send mt-4 text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
