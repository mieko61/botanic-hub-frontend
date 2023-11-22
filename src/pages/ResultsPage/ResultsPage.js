import "./ResultsPage.scss";
import ResultCard from "../../components/ResultCard/ResultCard";
import arrowIcon from "../../assets/images/icons/back.svg";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";

let Results = () => {
  const [allResults, setAllResults] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const healthUse = searchParams.get("healthUse");
    const category = searchParams.get("category");
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderResults = async () => {
      let response = await axios.get(
        `${apiBody}/results?healthUse=${healthUse}&category=${category}`
      );
      setAllResults(response.data);
    };
    renderResults();
  }, []);

  if (!allResults) return null;

  return (
    <main className="categories">
      <div className="page-header">
        <img
          src={arrowIcon}
          alt="back arrow"
          className="page-header__arrow"
          onClick={() => navigate(-1)}
        />
        <h2 className="page-header_title">Results</h2>
      </div>
      {allResults.map((results) => {
        return <ResultCard key={results.id} results={results} />;
      })}
    </main>
  );
};

export default Results;
