import "./Categories.scss";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import arrowIcon from "../../assets/images/icons/back.svg";

let Categories = () => {
  return (
    <main className="categories">
      <div className="page-header">
        <img src={arrowIcon} alt="back arrow" className="page-header__arrow" />
        <h2 className="page-header_title">Select a category</h2>
      </div>
      <CategoryCard />
    </main>
  );
};

export default Categories;
