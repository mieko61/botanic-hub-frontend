import "./DetailsPage.scss";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoritesModal from "../../components/FavoritesModal/FavoritesModal";
import arrowIcon from "../../assets/images/icons/back.svg";

let Details = () => {
  const [plantDetails, setPlantDetails] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plant = searchParams.get("plant");
  const userId = searchParams.get("userId");

  console.log(plant);
  let [isOpen, setIsOpen] = useState(false);
  const [updatedFavorites, setUpdatedFavorites] = useState();

  const handleReturnHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderplantDetails = async () => {
      let response = await axios.get(`${apiBody}/plantdetails?plant=${plant}`);
      setPlantDetails(response.data);
    };
    renderplantDetails();
  }, []);

  let addPlant = async (plant) => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    console.log(plant);
    const newPlant = { plant_id: plant };
    try {
      await plantDetails;

      let response = await axios.post(
        `${apiBody}/favorites?user=${userId}`,
        newPlant
      );
      setUpdatedFavorites();
    } catch (error) {
      console.error("Error adding plant", error);
    }
  };

  if (!plantDetails) return null;

  function flipValue() {
    setIsOpen(!isOpen);
  }

  const handleButtonClick = () => {
    flipValue();
    addPlant(plant);
    console.log("execute");
  };
  return (
    <main className="main">
      <section className="details-container">
        <div className="page-header">
          <img
            src={arrowIcon}
            alt="back arrow"
            className="page-header__arrow"
            onClick={() => navigate(-1)}
          />
          <h2 className="page-header_title">Plant Details</h2>
        </div>
        <div className="plant-details">
          <img
            alt={plantDetails.name}
            className="plant-details_image"
            src={plantDetails.image}
          />
          <div className="plant-details_info">
            <h3 className="plant-details_title">{plantDetails.name}</h3>
            <p className="plant-details_body">{plantDetails.description}</p>
            <div className="buttons-container--desktop">
              <button onClick={handleButtonClick} className="button">
                Save to favorites
              </button>
              <button
                className="button button--secondary"
                onClick={handleReturnHome}
              >
                Back to dashboard
              </button>
            </div>
          </div>
        </div>
        <div className="buttons-container--mobile">
          <button onClick={handleButtonClick} className="button">
            Save to favorites
            <FavoritesModal
              plantDetails={plantDetails}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              ariaHideApp={false}
            />{" "}
          </button>
          <button
            className="button button--secondary"
            onClick={handleReturnHome}
          >
            Back to dashboard
          </button>
        </div>
        <FavoritesModal
          plantDetails={plantDetails}
          isOpen={isOpen}
          closeModal={flipValue}
          ariaHideApp={false}
        />{" "}
      </section>
    </main>
  );
};

export default Details;
