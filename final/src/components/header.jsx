import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        
    <header className="head container">
      <div className="head__left">
      <img src="../pictures/shop.png" 
      width="50px" height="50px"/>
      <h1>Электроника</h1>
    </div>
      <div className="head__left">
      <Link to="/" className="link router">Товары</Link>
      <Link to="/cart" className="link">Корзина</Link>
      </div>
    </header>
    </div>
  );
};

export default Header;


