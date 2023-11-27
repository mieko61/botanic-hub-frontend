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
  const userId = searchParams.get("userId");

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderHealthUses = async () => {
      let response = await axios.get(
        `${apiBody}/healthUse?category=${category}`
      );
      setAllHealthUses(response.data);
    };
    renderHealthUses();
  }, [category]);

  if (!allHealthUses) return null;

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
          <h2 className="page-header_title">Select a topic</h2>
        </div>
        <div className="cards-container">
          {allHealthUses.map((healthUse) => {
            return (
              <HealthUseCard
                key={healthUse.id}
                healthUse={healthUse}
                category={category}
                userId={userId}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HealthUse;
