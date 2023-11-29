import "./DashboardPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import plantDrawing from "../../assets/images/plant.png";
import LoginPrompt from "../../components/LoginPrompt/LoginPrompt";

let Dashboard = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const login = async () => {
      const apiBody = process.env.REACT_APP_BASE_URL;

      try {
        if (token) {
          const response = await axios.get(`${apiBody}/profile`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setData(response.data);
        }
      } catch (error) {
        setFailedAuth(true);
        console.log(error.message);
      }
      setIsLoading(false);
    };

    login();
  }, []);

  const handleGetStarted = () => {
    navigate(`/categories`);
  };

  if (isLoading) {
    return <main className="main">Loading...</main>;
  }

  return (
    <main className="main main--dashboard">
      <section className="dashboard-container">
        <h1 className="dashboard__header">
          Hello, {data && data.name ? data.name : ""}
        </h1>
        <img src={plantDrawing} className="dashboard__image" />
        <h2 className="dashboard__body">
          Discover the power of plants and the benefits of herbal medicine.
        </h2>
        <button onClick={handleGetStarted} className="button button--dashboard">
          Get started
        </button>
      </section>
    </main>
  );
};

export default Dashboard;
