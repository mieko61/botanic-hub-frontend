import "./HealthUseCard.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

let HealthUseCard = ({ healthUse, category }) => {
  const navigate = useNavigate();

  const handleRenderResults = () => {
    navigate(`/results?healthUse=${healthUse.id}&category=${category.id}`);
  };

  return (
    <div className="category-card" onClick={handleRenderResults}>
      <h3 className="category-card__title">{healthUse.healthUse}</h3>
      <img src="/" alt="category image" className="category-card__image" />
    </div>
  );
};

export default HealthUseCard;
