import "./FavoritesCard.scss";
import { useNavigate } from "react-router-dom";

let FavoritesCard = ({ favorite, user }) => {
  const navigate = useNavigate();
  const handleRenderDetails = () => {
    navigate(`/plantdetails?plant=${favorite.plant_id}`);
    // navigate(`/favorites/plant?favorite=${favorite.id}&user=${user.id}`);

    console.log(favorite.plant_id);
  };
  return (
    <div className="result-card" onClick={handleRenderDetails}>
      <h4 className="result-card__title">{favorite?.name}</h4>
      <img
        alt={favorite.name}
        className="result-card__image"
        src={favorite?.image}
      />
    </div>
  );
};

export default FavoritesCard;
