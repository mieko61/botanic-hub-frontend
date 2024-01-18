import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const handleRenderHealthUse = () => {
    navigate(`/healthUse?category=${category.id}`);
  };
  return (
    <div className="card" onClick={handleRenderHealthUse}>
      <h3 className="card__title">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
