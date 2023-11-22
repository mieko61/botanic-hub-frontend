import "./DashboardPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let Dashboard = () => {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate;

  const logout = () => {
    sessionStorage.removeItem("token");
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

  useEffect(() => {
    login();
  }, []);

  if (failedAuth) {
    return <main>You must log in to see this page.</main>;
  }

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome back. {data.name}</p>
    </main>
  );
};

export default Dashboard;
