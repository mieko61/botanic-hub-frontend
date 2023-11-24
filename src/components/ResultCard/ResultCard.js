import "./ResultCard.scss";
import { useNavigate } from "react-router-dom";

let ResultCard = ({ plant }) => {
  const navigate = useNavigate();
  const handleRenderDetails = () => {
    navigate(`/plantdetails?plant=${plant.id}`);
  };

  return (
    <div className="category-card" onClick={handleRenderDetails}>
      <h3 className="category-card__title">{plant.name}</h3>
      <img
        alt="category image"
        className="result-card__image"
        src={plant.image}
      />
    </div>
  );
};

export default ResultCard;
