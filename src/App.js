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
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
