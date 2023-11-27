import { useNavigate } from "react-router-dom";

let CategoryCard = ({ category, userId }) => {
  const navigate = useNavigate();
  const handleRenderHealthUse = () => {
    navigate(`/healthUse?category=${category.id}&userId=${userId}`);
  };
  return (
    <div className="card" onClick={handleRenderHealthUse}>
      <h3 className="card__title">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
