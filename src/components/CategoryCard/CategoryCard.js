import "./CategoryCard.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
