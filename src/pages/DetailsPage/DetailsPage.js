import "./DetailsPage.scss";
import closeIcon from "../../assets/images/icons/x-circle.svg";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import FavoritesModal from "../../components/FavoritesModal/FavoritesModal";

let Details = () => {
  const [plantDetails, setPlantDetails] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plant = searchParams.get("plant");
  const healthUse = searchParams.get("healthUse");
  //   const category = searchParams.get("category");
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //moved to parent... change name ... is successmodal open

    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderplantDetails = async () => {
      let response = await axios.get(
        `${apiBody}/results/plant?plant=${plant}&healthUse=${healthUse}`
      );
      setPlantDetails(response.data);
    };
    renderplantDetails();
  }, []);

  if (!plantDetails) return null;

  return (
    <main className="categories">
      <div>
        <FavoritesModal plantDetails={plantDetails} />{" "}
        <button>Back to dashboard</button>
      </div>
      <div>
        <img src={closeIcon} alt="close icon" onClick={() => navigate(-1)} />
        <img
          alt="category image"
          className="result-card__image"
          src={plantDetails.image}
        />
        <h2>{plantDetails.name}</h2>
        <p>{plantDetails.description}</p>
      </div>
    </main>
  );
};

export default Details;
