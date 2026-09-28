const equipo = [
  { nombre: "Leo", rol: "Desarrollador Front-End" },
  { nombre: "Nardo", rol: "Diseñador UI/UX" },
  { nombre: "Ruiz", rol: "Especialista en QA" },
];

function Footer() {
  return (
    <footer>
      <p>TiendaAccesorios © 2026 Leo Page</p>

      <div className="footer-equipo">
        {equipo.map((persona) => (
          <div className="footer-card" key={persona.nombre}>
            <p className="footer-nombre">{persona.nombre}</p>
            <p className="footer-rol">{persona.rol}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
