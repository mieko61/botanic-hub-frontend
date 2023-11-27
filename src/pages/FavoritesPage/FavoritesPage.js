import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FavoritesCard from "../../components/FavoritesCard/FavoritesCard";

let FavoritesPage = () => {
  const [favorites, setFavorites] = useState();
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");

  useEffect(() => {
    const apiBody = process.env.REACT_APP_BASE_URL;
    const renderFavorites = async () => {
      let response = await axios.get(`${apiBody}/favorites?user=4`);

      // let response = await axios.get(`${apiBody}/favorites?user=${user}`);
      setFavorites(response.data);
      // console.log(user);
      console.log(response.data);
    };
    renderFavorites();
  }, []);
  if (!favorites) return null;

  return (
    <main className="main">
      <section className="main-container">
        <div className="page-header">
          <h2 className="page-header_title">Favorites</h2>
        </div>
        <div className="page-results">
          {favorites.map((favorite) => {
            return (
              <FavoritesCard
                key={favorite.id}
                favorite={favorite}
                user={user}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default FavoritesPage;
