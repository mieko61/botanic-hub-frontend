import { useNavigate } from "react-router-dom";

let HealthUseCard = ({ healthUse, category, userId }) => {
  const navigate = useNavigate();

  const handleRenderResults = () => {
    navigate(
      `/results?healthUse=${healthUse.id}&category=${category.id}&userId=${userId}`
    );
  };

  return (
    <div className="card" onClick={handleRenderResults}>
      <h3 className="card__title">{healthUse.healthUse}</h3>
    </div>
  );
};

export default HealthUseCard;
