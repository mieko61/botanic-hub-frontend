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
    <div className="category-card" onClick={handleRenderDetails}>
      <h3 className="category-card__title">{favorite?.name}</h3>
      <img
        alt="favorite image"
        className="result-card__image"
        src={favorite?.image}
      />
    </div>
  );
};

export default FavoritesCard;
