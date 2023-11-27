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
import Settings from "./pages/SettingsPage/SettingsPage";

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
          <Route path="/login" element={<Login />} />
          <Route
            path="/logout"
            element={<Settings isLoggedin={isLoggedin} />}
          />
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/favorites"
            element={<Favorites isLoggedin={isLoggedin} />}
          />
          <Route
            path="/favorites/plant"
            element={<FavoritesCard isLoggedin={isLoggedin} />}
          />
          <Route
            path="/categories"
            element={<Categories isLoggedin={isLoggedin} />}
          />
          <Route
            path="/healthUse"
            element={<HealthUse isLoggedin={isLoggedin} />}
          />
          <Route
            path="/results"
            element={<Results isLoggedin={isLoggedin} />}
          />
          <Route
            path="/plantdetails"
            element={<DetailsPage isLoggedin={isLoggedin} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
