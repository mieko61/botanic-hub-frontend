import "./LogoutPage.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

let SettingsPage = ({ isLoggedin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    const apiBody = process.env.REACT_APP_BASE_URL;

    const logout = () => {
      sessionStorage.removeItem(token);
      navigate("/login");
    };
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  if (!isLoggedin) {
    return (
      <main className="main">
        <section>
          <h2 className="dashboard__header--fail">
            You're not currently logged in
          </h2>
          <button className="button" onClick={handleLogin}>
            Log in
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="main main--center">
      <button className="button" onClick={logout}>
        Log out
      </button>
    </main>
  );
};

export default SettingsPage;
