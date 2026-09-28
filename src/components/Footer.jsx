import { useState, useEffect } from "react";

function Footer() {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    fetch("/equipo.json")
      .then((response) => response.json())
      .then((data) => setEquipo(data));
  }, []);

  return (
    <footer>
      <div className="footer-equipo">
        {equipo.map((persona) => (
          <div className="footer-card" key={persona.id}>
            <img
              src={persona.avatar}
              alt={persona.nombre}
              className="footer-avatar"
            />
            <p className="footer-nombre">{persona.nombre}</p>
            <p className="footer-rol">{persona.rol}</p>
          </div>
        ))}
      </div>
      <p>TiendaAccesorios © 2026 Leo Page</p>
    </footer>
  );
}

export default Footer;
