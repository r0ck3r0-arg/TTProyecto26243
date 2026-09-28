import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
