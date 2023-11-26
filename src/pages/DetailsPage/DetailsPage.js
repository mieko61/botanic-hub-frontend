import "./DetailsPage.scss";
import closeIcon from "../../assets/images/icons/x-circle.svg";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import FavoritesModal from "../../components/FavoritesModal/FavoritesModal";
import arrowIcon from "../../assets/images/icons/back.svg";

let Details = () => {
  const [plantDetails, setPlantDetails] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plant = searchParams.get("plant");
  let [isOpen, setIsOpen] = useState(false);

  const handleReturnHome = () => {
    navigate("/");
  };

  useEffect(() => {
    //moved to parent... change name ... is successmodal open

    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderplantDetails = async () => {
      let response = await axios.get(`${apiBody}/plantdetails?plant=${plant}`);
      setPlantDetails(response.data);
    };
    renderplantDetails();
  }, []);

  //comment out temporarily (saturday)
  // let addPlant = async () => {
  //   try {
  //     let response = await axios.post(`${apiBody}/favorites?user=${user}`, {
  //       plant_id: response.data.id,
  //     });
  //     console.log(response.data);

  //     console.log("Plant was successfully added", response.data);
  //   } catch (error) {
  //     console.error("Error adding plant", error);
  //   }
  // };

  if (!plantDetails) return null;

  return (
    <main className="plant-details">
      <div className="plant-details_upper-container">
        {/* <div className="close-button">
          <img
            className="close-button_icon"
            src={closeIcon}
            alt="close icon"
            onClick={() => navigate(-1)}
          />
        </div> */}
        <div className="page-header page-header--details">
          <img
            src={arrowIcon}
            alt="back arrow"
            className="page-header__arrow"
            onClick={() => navigate(-1)}
          />
          <h2 className="page-header_title">Plant Details</h2>
        </div>

        <img
          alt="category image"
          className="upper-container_image"
          src={plantDetails.image}
        />
        <h3 className="upper-container_title">{plantDetails.name}</h3>
        <p className="upper-container_body">{plantDetails.description}</p>
      </div>
      <div className="plant-details_lower-container">
        <FavoritesModal plantDetails={plantDetails} />{" "}
        <button className="button button--secondary" onClick={handleReturnHome}>
          Back to dashboard
        </button>
      </div>
    </main>
  );
};

export default Details;
