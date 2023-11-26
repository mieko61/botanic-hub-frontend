import "./ResultCard.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

let ResultCard = ({ plant }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  const handleRenderDetails = () => {
    navigate(`/plantdetails?plant=${plant.id}&userId=${userId}`);
  };

  return (
    <div className="result-card" onClick={handleRenderDetails}>
      <h4 className="result-card__title">{plant.name}</h4>
      <img alt={plant.name} className="result-card__image" src={plant.image} />
    </div>
  );
};

export default ResultCard;
