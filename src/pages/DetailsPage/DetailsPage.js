import "./DetailsPage.scss";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoritesModal from "../../components/FavoritesModal/FavoritesModal";
import arrowIcon from "../../assets/images/icons/back.svg";
import PlantUsePill from "../../components/PlantUsePill/PlantUsePill";

let Details = () => {
  const [plantDetails, setPlantDetails] = useState();
  const [plantUses, setPlantUses] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plant = searchParams.get("plant");
  const [error, setError] = useState(null);

  let [isOpen, setIsOpen] = useState(false);
  const [updatedFavorites, setUpdatedFavorites] = useState();

  const handleReturnHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    try {
      const renderplantDetails = async () => {
        let response = await axios.get(
          `${apiBody}/plantdetails?plant=${plant}`
        );
        setPlantDetails(response.data);
      };
      renderplantDetails();
    } catch (error) {
      console.error("Error rendering plant", error.response || error);
    }

    const renderplantUses = async () => {
      let response = await axios.get(
        `${apiBody}/plantdetails/plantuses?plant=${plant}`
      );
      setPlantUses(response.data);
    };
    renderplantUses();
  }, []);

  let addPlant = async (plant) => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const newPlant = { plant_id: plant };
    const token = sessionStorage.getItem("token");
    if (!token) return "You're not logged in";

    try {
      let favoritesResponse = await axios.get(`${apiBody}/favorites`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      let userFavorites = favoritesResponse.data;
      let isNewPlantInFavorites = userFavorites.some(
        (favorite) => favorite.plant_id == plant
      );

      if (isNewPlantInFavorites) {
        return "This plant is already saved in favorites";
      } else {
        await axios.post(`${apiBody}/favorites`, newPlant, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUpdatedFavorites();
        return true;
      }
    } catch (error) {
      console.error("Error adding plant", error);
    }
  };

  if (!plantDetails) return null;

  function flipValue() {
    setIsOpen(!isOpen);
  }

  const handleButtonClick = async () => {
    const result = await addPlant(plant);
    if (result === true) {
      flipValue();
      setError(null);
    } else {
      console.log(result);
      setError(result);
    }
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
            <article className="other-uses">
              <p className="other-uses_title">Also good for:</p>
              <ul className="other-uses_list">
                {plantUses.map((use) => {
                  return (
                    <PlantUsePill
                      key={use.healthUse_id}
                      healthUse={use.healthUse}
                    />
                  );
                })}
              </ul>
            </article>
            {error && (
              <div className="error">
                <p>Error: {error}</p>
              </div>
            )}
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
