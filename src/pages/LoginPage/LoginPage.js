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

    console.log(event.target.password.value);

    try {
      const response = await axios.post(`${apiBody}/login`, {
        username: event.target.email.value,
        password: event.target.password.value,
      });
      sessionStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
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
