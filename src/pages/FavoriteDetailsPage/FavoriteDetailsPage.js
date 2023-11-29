import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RemoveFavoritesModal from "../../components/RemoveFavoritesModal/RemoveFavoritesModal";
import arrowIcon from "../../assets/images/icons/back.svg";

let Details = () => {
  const [plantDetails, setPlantDetails] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plant = searchParams.get("plant");

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

  let removePlant = async (plant) => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const plantToRemove = plant;

    const token = sessionStorage.getItem("token");

    if (!token) return "you're not logged in";
    try {
      await plantDetails;
      // console.log("token", token);

      let response = await axios.delete(`${apiBody}/favorites`, plantToRemove, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUpdatedFavorites();
    } catch (error) {
      console.error("Error removing plant", error);
    }
  };

  if (!plantDetails) return null;

  function flipValue() {
    setIsOpen(!isOpen);
  }

  const handleButtonClick = () => {
    flipValue();
    removePlant(plant);
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
                Remove from favorites
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
            Remove from favorites
          </button>
          <button
            className="button button--secondary"
            onClick={handleReturnHome}
          >
            Back to dashboard
          </button>
        </div>
        <RemoveFavoritesModal
          plantDetails={plantDetails}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          closeModal={flipValue}
          ariaHideApp={false}
        />{" "}
      </section>
    </main>
  );
};

export default Details;
