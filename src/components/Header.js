const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.pngfind.com/pngs/m/70-708352_png-image-information-food-and-beverages-logo-transparent.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
