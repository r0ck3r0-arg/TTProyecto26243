import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Carrito() {
  const { carrito, removeFromCart, cantidadTotal } = useContext(CartContext);

  if (carrito.length === 0) {
    return <p className="carrito-vacio">Tu carrito está vacío 🛒</p>;
  }

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <section>
      <h2 className="ph2">Mi Carrito ({cantidadTotal})</h2>
      <ul id="lista-carrito">
        {carrito.map((item) => (
          <li className="carrito-item" key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
            <div className="carrito-item-info">
              <p className="carrito-nombre">{item.nombre}</p>
              <p className="carrito-precio">${item.precio} c/u</p>
              <p className="carrito-subtotal">Cantidad: {item.cantidad}</p>
            </div>
            <button className="btn-eliminar" onClick={() => removeFromCart(item.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
      <p id="total-carrito">Total: ${total.toFixed(2)}</p>
    </section>
  );
}

export default Carrito;
