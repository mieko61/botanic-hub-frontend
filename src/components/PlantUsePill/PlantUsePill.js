import "./PlantUsePill.scss";

const PlantUsePill = ({ healthUse }) => {
  return (
    <li>
      <div className="pill">{healthUse}</div>
    </li>
  );
};

export default PlantUsePill;
