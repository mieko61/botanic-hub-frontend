import "./FavoritesModal";
import Modal from "react-modal";
import closeIcon from "../../assets/images/icons/x-circle.svg";

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

let addFavorite = () => {
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

  return <div></div>;
};
