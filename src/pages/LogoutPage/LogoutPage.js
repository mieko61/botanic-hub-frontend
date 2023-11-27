import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

let SettingsPage = ({ isLoggedin }) => {
  const navigate = useNavigate();
  // const [data, setData] = useState(null);
  // const [failedAuth, setFailedAuth] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("token");
    // setData(null);
    // setFailedAuth(true);
    navigate("/login");
  };

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
    <main className="main">
      <button className="button" onClick={logout}>
        Log out
      </button>
    </main>
  );
};

export default SettingsPage;
