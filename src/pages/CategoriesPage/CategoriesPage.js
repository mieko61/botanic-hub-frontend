import CategoryCard from "../../components/CategoryCard/CategoryCard";
import arrowIcon from "../../assets/images/icons/back.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

let Categories = () => {
  const [allCategories, setAllCategories] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderCategories = async () => {
      let response = await axios.get(`${apiBody}/categories`);
      setAllCategories(response.data);
    };
    renderCategories();
  }, []);

  if (!allCategories) return null;

  return (
    <main className="main">
      <section className="main-container">
        <div className="page-header">
          <img
            src={arrowIcon}
            alt="back arrow"
            className="page-header__arrow"
            onClick={() => navigate(-1)}
          />
          <h2 className="page-header_title">Select a category</h2>
        </div>
        <div className="cards-container">
          {allCategories.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Categories;
