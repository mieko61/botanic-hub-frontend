import "./FavoritesModal";
import Modal from "react-modal";
import closeIcon from "../../assets/images/icons/x-circle.svg";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

//pass "is successmodal open" and function
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

let FavoritesModal = ({ plantDetails }) => {
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#13182C";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const apiBody = process.env.REACT_APP_BASE_URL;
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");
  const [isOpen, setIsOpen] = useState();
  // const [updatedFavorites, setUpdatedFavorites] = useState();

  let addPlant = async () => {
    try {
      let response = await axios.post(`${apiBody}/favorites?user=${user}`, {
        plant_id: response.data.id,
      });
      console.log(response.data);

      console.log("Plant was successfully added", response.data);
    } catch (error) {
      console.error("Error adding plant", error);
    }
  };

  // move addPlant to Details page  and Button
  //on click, run addPlant, if axios all succeds, set new state on details page called favoritesAdded

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
            addPlant(plantDetails);
            setIsOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default FavoritesModal;
