import "./ResultCard.scss";
import { useNavigate } from "react-router-dom";

let ResultCard = ({ plant }) => {
  const navigate = useNavigate();
  const handleRenderDetails = () => {
    navigate(`/plantdetails?plant=${plant.id}`);
  };

  return (
    <div className="card--result" onClick={handleRenderDetails}>
      <h3 className="card__title">{plant.name}</h3>
      <img alt={plant.name} className="card__image" src={plant.image} />
    </div>
  );
};

export default ResultCard;
