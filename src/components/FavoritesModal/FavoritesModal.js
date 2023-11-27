import "./FavoritesModal.scss";
import Modal from "react-modal";
import closeIcon from "../../assets/images/icons/x-circle.svg";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const customStyles = {
  content: {
    top: "26%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function FavoritesModal({
  plantDetails,
  addPlant,
  setIsOpen,
  isOpen,
  closeModal,
}) {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#1c2826";
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="modal-button">
        <img
          src={closeIcon}
          alt="close icon"
          className="close-button_icon"
          onClick={closeModal}
        />
      </div>
      <div className="modal-text">
        <h4 ref={(_subtitle) => (subtitle = _subtitle)}>{plantDetails.name}</h4>
        <p>has been added to your favorites</p>
      </div>
    </Modal>
  );
}

export default FavoritesModal;
