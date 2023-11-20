import "./Categories.scss";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

let Categories = () => {
  return (
    <main className="categories">
      <div className="page-header">
        <img src="/" alt="back arrow" className="page-header__arrow" />
        <h2 className="page-header_title">Select a category</h2>
      </div>
      <CategoryCard />
    </main>
  );
};

export default Categories;
