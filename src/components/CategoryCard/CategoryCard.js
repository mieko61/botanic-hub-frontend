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
      {/* <Link to={"/healthUse"} className="link"> */}
      <div className="category-card" onClick={handleRenderHealthUse}>
        <h3 className="category-card__title">{category.name}</h3>
        <img src="/" alt="category image" className="category-card__image" />
      </div>
      {/* </Link> */}
    </div>
  );
};

export default CategoryCard;
