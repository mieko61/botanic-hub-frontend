import "./HealthUseCard.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

let HealthUseCard = ({ healthUse, category, userId }) => {
  const navigate = useNavigate();
  console.log(userId);

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
