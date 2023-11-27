import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import HeartIcon from "../HeartIcon/HeartIcon";
import SettingsIcon from "../SettingsIcon/SettingsIcon";
import { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/images/icons/heart.svg";

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const svgColor = isHovered ? "#d64550" : "#ea9e8d";

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
            {/* <HeartIcon
              alt="favorites icon"
              className="header-icon"
              fill={svgColor}
              stroke={svgColor}
            /> */}
            <Heart className="heart" />
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <SettingsIcon
              alt="settings icon"
              className="header-icon"
              fill={svgColor}
              stroke={svgColor}
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
