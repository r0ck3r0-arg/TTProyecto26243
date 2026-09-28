import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/carrito">
      🛒 Carrito
      <span
        className="badge-carrito"
        style={{ display: cantidadTotal > 0 ? "inline-flex" : "none" }}
      >
        {cantidadTotal}
      </span>
    </Link>
  );
}

export default CartWidget;
