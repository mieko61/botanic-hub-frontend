import "./ResultCard.scss";

let ResultCard = ({ results }) => {
  return (
    <div className="category-card">
      <h3 className="category-card__title">{results.name}</h3>
      <img
        alt="category image"
        className="result-card__image"
        src={results.image}
      />
    </div>
  );
};

export default ResultCard;
