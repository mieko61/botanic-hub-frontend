import "./ResultCard.scss";
import { useNavigate } from "react-router-dom";

const ResultCard = ({ plant }) => {
  const navigate = useNavigate();

  const handleRenderDetails = () => {
    navigate(`/plantdetails?plant=${plant.id}`);
  };

  return (
    <div className="result-card" onClick={handleRenderDetails}>
      <h4 className="result-card__title">{plant.name}</h4>
      <img alt={plant.name} className="result-card__image" src={plant.image} />
    </div>
  );
};

export default ResultCard;
