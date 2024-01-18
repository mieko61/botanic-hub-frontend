import "./LogoutPage.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) setIsLoggedIn(false);
  }, []);

  if (!isLoggedIn) {
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
