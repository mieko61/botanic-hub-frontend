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
    <div className="card--result" onClick={handleRenderDetails}>
      <h3 className="card__title">{plant.name}</h3>
      <img alt={plant.name} className="card__image" src={plant.image} />
    </div>
  );
};

export default ResultCard;
