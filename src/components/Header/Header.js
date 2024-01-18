import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/images/icons/heart.svg";
import { ReactComponent as Settings } from "../../assets/images/icons/user.svg";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="header__logo" />
        </NavLink>
        <div className="header__nav">
          <NavLink
            to={"/favorites"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
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
