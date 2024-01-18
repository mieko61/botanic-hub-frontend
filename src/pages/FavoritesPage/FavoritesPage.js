import { useState, useEffect } from "react";
import axios from "axios";
import FavoritesCard from "../../components/FavoritesCard/FavoritesCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    const apiBody = process.env.REACT_APP_BASE_URL;

    const renderFavorites = async () => {
      let response = await axios.get(`${apiBody}/favorites?`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setFavorites(response.data);
    };
    renderFavorites();
  }, []);

  if (!favorites)
    return (
      <main className="main main--center">
        <h2>You don't have any favorites yet</h2>
      </main>
    );

  return (
    <main className="main">
      <section className="main-container">
        <div className="page-header">
          <h2 className="page-header_title">Favorites</h2>
        </div>
        <div className="page-results">
          {favorites.map((favorite) => {
            return <FavoritesCard key={favorite.id} favorite={favorite} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default FavoritesPage;
