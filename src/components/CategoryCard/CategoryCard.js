import "./CategoryCard.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

let CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleRenderHealthUse = () => {
    navigate(`/healthUse?category=${category.id}`);
  };
  return (
    <div>
      <div className="card" onClick={handleRenderHealthUse}>
        <h3 className="card__title">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
