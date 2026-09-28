import ItemListContainer from "../components/ItemListContainer";

function validarFormulario(e) {
  const nombre = e.target.nombre.value;
  const email = e.target.email.value;
  const mensaje = e.target.mensaje.value;

  if (!nombre || !email || !mensaje) {
    alert("Completá todos los campos");
    e.preventDefault();
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("El correo no es válido");
    e.preventDefault();
  }
}

function Home() {
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
          <div className="resena">⭐️⭐️⭐️⭐️⭐️ Excelente calidad</div>
          <div className="resena">⭐️⭐️⭐️⭐️ Muy buenos productos</div>
          <div className="resena">⭐️⭐️⭐️⭐️⭐️ Me encantó</div>
          <div className="resena">⭐️⭐️⭐️ Buen servicio</div>
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

          <form
            action="https://formspree.io/f/xgodkrdr"
            method="POST"
            onSubmit={validarFormulario}
          >
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo" required />
            <textarea name="mensaje" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
