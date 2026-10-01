import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Item({ id, nombre, precio, stock, imagen }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <div className="card-body">
        <h3>{nombre}</h3>
        <p className="precio-box">${precio}</p>
        <p className="stock-info">Stock: {stock} unidades</p>
        <button onClick={() => addToCart({ id, nombre, precio, imagen })} className="btn-agregar">
          Agregar al Carrito
        </button>
        <Link to={`/producto/${id}`} className="btn-agregar">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
