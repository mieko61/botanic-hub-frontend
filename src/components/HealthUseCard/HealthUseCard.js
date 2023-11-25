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
    <div className="card" onClick={handleRenderResults}>
      <h3 className="card__title">{healthUse.healthUse}</h3>
    </div>
  );
};

export default HealthUseCard;
