import "./HealthUsePage.scss";
import HealthUseCard from "../../components/HealthUseCard/HealthUseCard";
import arrowIcon from "../../assets/images/icons/back.svg";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

let HealthUse = () => {
  const [allHealthUses, setAllHealthUses] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderHealthUses = async () => {
      let response = await axios.get(
        `${apiBody}/healthUse?category=${category}`
      );
      setAllHealthUses(response.data);
    };
    renderHealthUses();
  }, []);

  if (!allHealthUses) return null;

  return (
    <main className="categories">
      <div className="page-header">
        <img
          src={arrowIcon}
          alt="back arrow"
          className="page-header__arrow"
          onClick={() => navigate(-1)}
        />
        <h2 className="page-header_title">Select a topic</h2>
      </div>
      {allHealthUses.map((healthUse) => {
        return (
          <HealthUseCard
            key={healthUse.id}
            healthUse={healthUse}
            category={category}
          />
        );
      })}
    </main>
  );
};

export default HealthUse;
