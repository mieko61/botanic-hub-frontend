import { useNavigate } from "react-router-dom";

let LoginPrompt = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
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
};

export default LoginPrompt;
