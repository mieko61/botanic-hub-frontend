import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import heartIcon from "../../assets/images/icons/heart.svg";
import settingsIcon from "../../assets/images/icons/settings.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__nav">
        <img src={heartIcon} alt="favorites icon" className="header-icon" />
        <img src={settingsIcon} alt="settings icon" className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
