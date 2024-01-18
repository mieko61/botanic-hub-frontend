import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiBody = process.env.REACT_APP_BASE_URL;

    try {
      await axios.post(`${apiBody}/auth/register`, {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <main className="main">
      <section className="auth-container">
        <h2 className="login-title">Sign up</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <Input type="text" name="name" label="Name" />
          <Input type="text" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <button className="button button-login">Sign up</button>
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
        </form>
        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/login" className="signup-text_link">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Signup;
