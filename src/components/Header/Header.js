import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">BOTANIC HUB</h1>
      <div className="header__nav">
        <img src="/" alt="favorites icon" />
        <img src="/" alt="settings icon" />
      </div>
    </header>
  );
};

export default Header;
