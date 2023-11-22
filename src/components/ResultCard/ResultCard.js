import "./ResultCard.scss";
import { useNavigate } from "react-router-dom";

let ResultCard = ({ plant, healthUse }) => {
  const navigate = useNavigate();
  const handleRenderDetails = () => {
    navigate(`/results/plant?plant=${plant.id}&healthUse=${healthUse}`);
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
