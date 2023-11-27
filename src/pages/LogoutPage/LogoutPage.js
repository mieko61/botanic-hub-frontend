import { useNavigate } from "react-router-dom";

let SettingsPage = ({ isLoggedin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  if (!isLoggedin)
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
  return;
  <div></div>;
};

export default SettingsPage;
