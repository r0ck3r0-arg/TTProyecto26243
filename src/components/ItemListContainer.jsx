import { useState, useEffect } from "react";
import Item from "./Item";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div className="productosD-container">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          imagen={producto.imagen}
        />
      ))}
    </div>
  );
}

export default ItemListContainer;
