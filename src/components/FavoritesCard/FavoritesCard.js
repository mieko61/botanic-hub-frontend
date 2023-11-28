import { useNavigate } from "react-router-dom";

let FavoritesCard = ({ favorite }) => {
  const navigate = useNavigate();
  const handleRenderDetails = () => {
    navigate(`/favoriteplantdetails?plant=${favorite.plant_id}`);
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
