import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/DashboardPage/DashboardPage";
import Categories from "./pages/CategoriesPage/CategoriesPage";
import HealthUse from "./pages/HealthUsePage/HealthUsePage";
import Results from "./pages/ResultsPage/ResultsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Favorites from "./pages/FavoritesPage/FavoritesPage";
import FavoritesCard from "./components/FavoritesCard/FavoritesCard";
import Signup from "./pages/SignupPage/SignupPage";
import Logout from "./pages/LogoutPage/LogoutPage";

import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token") || false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/logout" element={<Logout isLoggedin={isLoggedin} />} />
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/favorites"
            element={<Favorites isLoggedin={isLoggedin} />}
          />
          <Route path="/favorites/plant" element={<FavoritesCard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/healthUse" element={<HealthUse />} />
          <Route path="/results" element={<Results />} />
          <Route path="/plantdetails" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
