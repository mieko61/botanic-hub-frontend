import "./LoginPage.scss";
import axios from "axios";
import { useState } from "react";
import Input from "../../components/Input/Input";
import { useNavigate, Link } from "react-router-dom";

let Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiBody = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.post(`${apiBody}/auth/login`, {
        // name: event.target.name.value,
        email: event.target.email.value,
      });
      sessionStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" />
        <button>Log in</button>
        {error && <div>{error}</div>}
      </form>
      <p>
        Need an account? <Link to="/">Sign up</Link>
      </p>
    </main>
  );
};

export default Login;
