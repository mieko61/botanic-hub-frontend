import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/images/icons/heart.svg";
import { ReactComponent as Settings } from "../../assets/images/icons/user.svg";

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // const userId = searchParams.get("userId");
  const userId = "6";

  console.log(userId);

  const handleFavorites = () => {
    navigate("/favorites", { state: { userId } });
    // navigate(`/favorites?userId=${userId}`);
  };

  const handleDashboard = () => {
    // navigate(`/?userId=${userId}`);
    navigate("/");
  };

  return (
    <header className="header-container">
      <div className="header">
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="header__logo" />
        </NavLink>
        <div className="header__nav">
          <NavLink to={{ pathname: "/favorites", state: userId }}>
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
