import "./HealthUseCard.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

let HealthUseCard = ({ healthUse }) => {
  return (
    <div className="category-card">
      <h3 className="category-card__title">{healthUse.healthUse}</h3>
      <img src="/" alt="category image" className="category-card__image" />
    </div>
  );
};

export default HealthUseCard;
