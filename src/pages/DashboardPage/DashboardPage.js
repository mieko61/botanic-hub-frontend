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

  const login = async () => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.get(`${apiBody}/profile`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setData(response.data);
      console.log(response);
    } catch (error) {
      setFailedAuth(true);
      console.log(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    login();
  }, []);

  const handleGetStarted = () => {
    navigate(`/categories?userId=${data.id}`);
  };

  if (failedAuth) {
    return <LoginPrompt />;
  }

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main className="main main--dashboard">
      <section className="dashboard-container">
        {failedAuth && <div>You must log in to see this page.</div>}
        <h1 className="dashboard__header">Hello, {data.name}</h1>
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
