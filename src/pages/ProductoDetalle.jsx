import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === Number(id));
        setProducto(encontrado);
      });
  }, [id]);

  if (!producto) {
    return <p className="ph2">Cargando producto...</p>;
  }

  return (
    <section>
      <div className="card" style={{ maxWidth: "260px", margin: "0 auto" }}>
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="card-body">
          <h3>{producto.nombre}</h3>
          <p className="descripcion">{producto.descripcion}</p>
          <p className="precio-box">${producto.precio}</p>
          <p className="stock-info">Stock disponible: {producto.stock} unidades</p>
          <button className="btn-agregar" onClick={() => addToCart(producto)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductoDetalle;
