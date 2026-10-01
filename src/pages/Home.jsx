import { useState } from "react";
import ItemListContainer from "../components/ItemListContainer";

function Home() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmitProducto = (e) => {
    e.preventDefault();
    console.log({ id, nombre, precio, stock });
  };

  return (
    <>
      <section id="inicio">
        <h2>Bienvenido a TiendaAccesorios</h2>
        <p>Accesorios únicos para amantes de la lectura 📖</p>
      </section>

      <section id="banner">
        <video autoPlay muted loop>
          <source src="/img/banner.mp4" type="video/mp4" />
        </video>
      </section>

      <section id="productos">
        <h2>Productos Destacados</h2>
        <ItemListContainer />
      </section>

      <section id="resenas">
        <h2>Reseñas</h2>
        <div className="grid-resenas">
          <p className="resena">⭐️⭐️⭐️⭐️⭐️ Excelente calidad</p>
          <p className="resena">⭐️⭐️⭐️⭐️ Muy buenos productos</p>
          <p className="resena">⭐️⭐️⭐️⭐️⭐️ Me encantó</p>
          <p className="resena">⭐️⭐️⭐️ Buen servicio</p>
        </div>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <div className="contacto-container">
          <div className="contacto-info">
            <p>
              <strong>Dirección:</strong> Arenales 3002
            </p>
            <p>
              <strong>Tel:</strong> +54 11 2345-6789
            </p>
            <p>
              <strong>Tel2:</strong> 0810-123-4567
            </p>
            <p>
              <strong>Horarios:</strong>
              <br />
              Lu a Vi de 9 a 20
              <br />
              Sa de 10 a 17
            </p>
          </div>

          <div className="contacto-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5528.135980830032!2d-58.40628944319921!3d-34.58970292908684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1777424083752!5m2!1ses-419!2sar"
              allowFullScreen=""
              loading="lazy"
              title="Ubicación de la tienda"
            ></iframe>
          </div>

          <form onSubmit={handleSubmitProducto}>
            <h3>Agregar Nuevo Producto</h3>

            <label>Id:</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <label>Nombre del Producto:</label>
            <input
              type="text"
              placeholder="Ej: Teclado Mecánico"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <label>Precio:</label>
            <input
              type="number"
              placeholder="Ej: 95"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />

            <label>Stock:</label>
            <input
              type="number"
              placeholder="Ej: 5"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

            <label>Imagen:</label>
            <input type="file" />

            <button type="submit">Guardar Producto</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
