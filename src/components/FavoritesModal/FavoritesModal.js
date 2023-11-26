import "./FavoritesModal";
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

function FavoritesModal({ plantDetails, addPlant, setIsOpen, isOpen }) {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#13182C";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        src={closeIcon}
        onClick={() => {
          // addPlant(plantDetails);
          setIsOpen(false);
        }}
      />
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
        {plantDetails.name} has been added to favorites
      </h2>
    </Modal>
  );
}

export default FavoritesModal;
