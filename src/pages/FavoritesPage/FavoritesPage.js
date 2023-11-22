import FavoritesPage from "FavoritesPage.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

let FavoritesPage = () => {
  const [favorites, setFavorites] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("user");

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
        <img
          src={arrowIcon}
          alt="back arrow"
          className="page-header__arrow"
          onClick={() => navigate(-1)}
        />
        <h2 className="page-header_title">Favorites</h2>
      </div>
      {allHealthUses.map((healthUse) => {
        return (
          <HealthUseCard
            key={healthUse.id}
            healthUse={healthUse}
            category={category}
          />
        );
      })}
    </main>
  );
};

export default FavoritesPage;
