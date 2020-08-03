import React from "react";
import Modal from "react-bootstrap/Modal";

function ModalContainer(props) {
  const handleClose = () => {
    props.setStatus(false);
  };
  return (
    <Modal show={props.status} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="modal-input">
          Email
          <input type="email" />
        </label>
        <label className="modal-input">
          Hasło
          <input type="password" />
        </label>
      </Modal.Body>
      <div className="modal-button-container">
        <button className="modal-button">{props.button}</button>
      </div>
    </Modal>
  );
}

export default ModalContainer;
