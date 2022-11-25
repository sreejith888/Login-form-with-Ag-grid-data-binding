import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="btn1"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Popup Modal</h1>
        </div>
        <div className="body">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Address" />
          <input placeholder="Phone Number" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
              alert("Response noted")
            }}
          >
            Save
          </button>
        </div>
      </div>
      /
    </div>
  );
}

export default Modal;
