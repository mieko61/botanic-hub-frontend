import "./FavoritesPage.scss";
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
      console.log(favorites);
    };
    renderFavorites();
  }, []);
  if (!favorites) return null;

  return (
    <main className="categories">
      <div className="page-header">
        <h2 className="page-header_title">Favorites</h2>
      </div>
      {favorites.map((favorite) => {
        return (
          <FavoritesCard key={favorite.id} favorite={favorite} user={user} />
        );
      })}
    </main>
  );
};

export default FavoritesPage;
