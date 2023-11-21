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
import Categories from "./pages/CategoriesPage/CategoriesPage";
import HealthUse from "./pages/HealthUsePage/HealthUsePage";
import Login from "./pages/LoginPage/LoginPage";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/categories"
            element={<Categories setSelectedCategory={setSelectedCategory} />}
          />
          <Route path="/healthUse" element={<HealthUse />} />
          {/* <Route
            path="/healthUse?category=:categoryId"
            element={<HealthUse />}
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
