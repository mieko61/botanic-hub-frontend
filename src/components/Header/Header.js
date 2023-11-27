import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/images/icons/heart.svg";
import { ReactComponent as Settings } from "../../assets/images/icons/user.svg";

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  const handleFavorites = () => {
    navigate("/favorites");
    // navigate(`/favorites?userId=${userId}`);
  };

  return (
    <header className="header-container">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <div className="header__nav">
          <NavLink to={"/favorites"}>
            <Heart className="heart" />
          </NavLink>
          <NavLink to={"/logout"}>
            <Settings className="settings" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
