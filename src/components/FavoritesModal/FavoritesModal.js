import "./FavoritesModal";
import Modal from "react-modal";
import closeIcon from "../../assets/images/icons/x-circle.svg";
import { useState } from "react";

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

let FavoritesModal = ({ addPlant, plantDetails }) => {
  let subtitle;
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#13182C";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Save to favorites</button>

      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 ref={(_subtitle) => (subtitle = _subtitle)}>
          {plantDetails.name} has been added to favorites
        </h1>
        <img
          src={closeIcon}
          onClick={() => {
            addPlant(plantDetails.id);
            setIsOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default FavoritesModal;
