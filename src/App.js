import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Link,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/DashboardPage/DashboardPage";
import Categories from "./pages/CategoriesPage/CategoriesPage";
import HealthUse from "./pages/HealthUsePage/HealthUsePage";
import Results from "./pages/ResultsPage/ResultsPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Favorites from "./pages/FavoritesPage/FavoritesPage";
import FavoritesCard from "./components/FavoritesCard/FavoritesCard";

import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorites/plant" element={<FavoritesCard />} />
          <Route
            path="/categories"
            element={<Categories setSelectedCategory={setSelectedCategory} />}
          />
          <Route path="/healthUse" element={<HealthUse />} />
          <Route path="/results" element={<Results />} />
          <Route path="/plantdetails" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
