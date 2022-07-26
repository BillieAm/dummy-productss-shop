import logo from "../logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="dummy logo" />
      </Link>
      <Link to="/cart">
        <i class="ri-shopping-cart-line"></i>
      </Link>
    </header>
  );
}

export default Header;
