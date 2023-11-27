import "./DashboardPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import plantDrawing from "../../assets/images/plant.png";

let Dashboard = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    setData(null);
    setFailedAuth(true);
    navigate("/login");
  };

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

  //copy paste to all pages that require authentication
  useEffect(() => {
    login();
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  // const userId = {data.id};
  // console.log(userId);

  const handleGetStarted = () => {
    navigate(`/categories?userId=${data.id}`);
  };

  if (failedAuth) {
    return (
      <main className="main">
        <section>
          <h2 className="dashboard__header--fail">
            You must log in to see this page
          </h2>
          <button className="button" onClick={handleLogin}>
            Log in
          </button>
        </section>
      </main>
    );
  }

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main className="main">
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
