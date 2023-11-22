import "./FavoritesPage.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

let FavoritesPage = () => {
  const [favorites, setFavorites] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderFavorites = async () => {
      let response = await axios.get(`${apiBody}/favorites?user=${user}`);
      setFavorites(response.data);
    };
    renderFavorites();
  }, []);
  if (!favorites) return null;

  return (
    <main className="categories">
      <div className="page-header">
        <h2 className="page-header_title">Favorites</h2>
      </div>
      {/* {allHealthUses.map((healthUse) => {
        return (
          <HealthUseCard
            key={healthUse.id}
            healthUse={healthUse}
            category={category}
          />
        );
      })} */}
    </main>
  );
};

export default FavoritesPage;
