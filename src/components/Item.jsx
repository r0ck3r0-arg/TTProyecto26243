import { Link } from "react-router-dom";

function Item({ id, nombre, precio, imagen }) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <div className="card-body">
        <h3>{nombre}</h3>
        <div className="precio-box">${precio}</div>
        <Link to={`/producto/${id}`} className="btn-agregar">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
