import "./CategoriesPage.scss";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import arrowIcon from "../../assets/images/icons/back.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

let Categories = () => {
  const [allCategories, setAllCategories] = useState();

  const navigate = useNavigate;

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderCategories = async () => {
      let response = await axios.get(`${apiBody}/categories`);
      setAllCategories(response.data);
      console.log(response.data);
    };
    renderCategories();
  }, []);

  if (!allCategories) return null;

  return (
    <main className="categories">
      <div className="page-header">
        <img src={arrowIcon} alt="back arrow" className="page-header__arrow" />
        <h2 className="page-header_title">Select a category</h2>
      </div>
      {allCategories.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </main>
  );
};

export default Categories;
