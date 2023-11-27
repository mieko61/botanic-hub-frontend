import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import HeartIcon from "../HeartIcon/HeartIcon";
import SettingsIcon from "../SettingsIcon/SettingsIcon";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const svgColor = isHovered ? "#d64550" : "#ea9e8d";

  return (
    <header className="header-container">
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <div className="header__nav">
          <NavLink to="/favorites">
            <HeartIcon
              alt="favorites icon"
              className="header-icon"
              fill={svgColor}
              stroke={svgColor}
            />
          </NavLink>
          <NavLink
            to="/settings"
            // className={({ isActive }) => (isActive ? "active" : "inactive")}
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
