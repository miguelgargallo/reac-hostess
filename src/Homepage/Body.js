import { useState } from "react";

let self = "#";

const MenuItem = ({ title, children }) => {
  const [displaySubMenu, setDisplaySubMenu] = useState(false);

  const handleDisplaySubMenu = () => {
    setDisplaySubMenu(!displaySubMenu);
  };

  return (
    <>
      <li className='menu-item-footer' onClick={handleDisplaySubMenu}>
        {displaySubMenu ? (
          <div>
            <span style={{ color: "black" }}>{title}</span>
            <span style={{ color: "black" }}>x</span>
          </div>
        ) : (
          <div>
            <span>{title}</span>
            <span>+</span>{" "}
          </div>
        )}
        {displaySubMenu && children}
      </li>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="upper-text">
          <p>
            1. Mediante la ley de protección de datos, notificamos que las
            cookies que recogemos son con Google Analytics y Google Search
            Console, para ussos de recogida esenciales.
          </p>
          <p>
            2. El teléfono de contacto en territorio nacional es gratuito, no nos hacemos responsables de cargos adicionales en llamadas internacionales.
          </p>
        </div>
        <div className="footer-desktop-list">
          <div className="col1">
            <ul className=" services-list">
              <li className="footer-list-title">Acerca de Nosotros</li>
              <a href="https://bcnhostess.com/alta/" target="_blank">
                <li className="sub-menu-item-footer">Inscríbete</li>
              </a>
              <a href="https://bcnhostess.com/presupuesto/" target="_blank">
                <li className="sub-menu-item-footer">Presupuesto</li>
              </a>
              <a href="https://bcnhostess.com/conocenos/">
                <li className="sub-menu-item-footer">Conócenos</li>
              </a>
              <a href="https://bcnhostess.com/contacto/">
                <li className="sub-menu-item-footer">Contacto</li>
              </a>
            </ul>
          </div>
          <div className="col2">
            <ul className=" services-list">
              <li className="footer-list-title">Servicios</li>
              <a href="https://bcnhostess.com/in-store/">
                <li className="sub-menu-item-footer">In Store</li>
              </a>
              <a href="https://bcnhostess.com/street-marketing/">
                <li className="sub-menu-item-footer">Street Marketing</li>
              </a>
              <a href="https://bcnhostess.com/ferias-y-congresos/">
                <li className="sub-menu-item-footer">Ferias y Congresos</li>
              </a>
              <a href="https://bcnhostess.com/acciones-de-imagen/">
                <li className="sub-menu-item-footer">Eventos de Imágen</li>
              </a>
              <a href="https://bcnhostess.com/otros-servicios/">
                <li className="sub-menu-item-footer">Otros</li>
              </a>
              <a href="https://bcnhostess.com/uniformes/">
                <li className="sub-menu-item-footer">Uniformes</li>
              </a>
            </ul>
          </div>
          <div className="col3">
            <ul className=" services-list">
              <li className="footer-list-title">Síguenos</li>
              <a
                href="https://www.facebook.com/barcelona.hostess/"
                target="_blank"
              >
                <li className="sub-menu-item-footer"> 6K Likes Facebook</li>
              </a>
              <a
                href="https://www.instagram.com/barcelona_hostess/"
                target="_blank"
              >
                <li className="sub-menu-item-footer">+ 4.3K Instagram</li>
              </a>
            </ul>
          </div>
        </div>
        {/* Mobile footer: */}
        <div className="footer-mobile-list">
          <ul>
            <MenuItem title="Acerca de Nosotros">
              <ul className="sub-menu-footer">
                <a href="https://bcnhostess.com/alta/" target="_blank">
                  <li className="sub-menu-item-footer">Inscríbete</li>
                </a>
                <a href="https://bcnhostess.com/presupuesto/" target="_blank">
                  <li className="sub-menu-item-footer">Presupuesto</li>
                </a>
                <a href="https://bcnhostess.com/conocenos/">
                  <li className="sub-menu-item-footer">Conócenos</li>
                </a>
                <a href="https://bcnhostess.com/contacto/">
                  <li className="sub-menu-item-footer">Contacto</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title="Servicios">
              <ul className="sub-menu-footer">
                <a href="https://bcnhostess.com/in-store/">
                  <li className="sub-menu-item-footer">In Store</li>
                </a>
                <a href="https://bcnhostess.com/street-marketing/">
                  <li className="sub-menu-item-footer">Street Marketing</li>
                </a>
                <a href="https://bcnhostess.com/ferias-y-congresos/">
                  <li className="sub-menu-item-footer">Ferias y Congresos</li>
                </a>
                <a href="https://bcnhostess.com/acciones-de-imagen/">
                  <li className="sub-menu-item-footer">Eventos de Imágen</li>
                </a>
                <a href="https://bcnhostess.com/otros-servicios/">
                  <li className="sub-menu-item-footer">Otros</li>
                </a>
                <a href="https://bcnhostess.com/uniformes/">
                  <li className="sub-menu-item-footer">Uniformes</li>
                </a>
              </ul>
            </MenuItem>
            <MenuItem title="Síguenos">
              <ul className="sub-menu-footer">
                <a
                  href="https://www.facebook.com/barcelona.hostess/"
                  target="_blank"
                >
                  <li className="sub-menu-item-footer"> 6K Likes Facebook</li>
                </a>
                <a
                  href="https://www.instagram.com/barcelona_hostess/"
                  target="_blank"
                >
                  <li className="sub-menu-item-footer">+ 4.3K Instagram</li>
                </a>
              </ul>
            </MenuItem>
          </ul>
        </div>
        <div className="more">
          Más formas de contactar:{" "}
          <a
            href="https://goo.gl/maps/RSaLJip2A9berE6A7"
            target="_blank"
            className="blue-link footer-link"
          >
            Encuéntranos en Google Maps
          </a>{" "}
          or{" "}
          <a href={self} className="blue-link footer-link">
            llámanos
          </a>{" "}
          ahora <a href="tel:933426265">933426265</a>. (2)
        </div>
        <div className="sub-footer">
          <div className="country-footer">España</div>
          <div className="copyright">
            <span>
              Copyright © 2022 BCN Hostess. Todos los derechos reservados.
            </span>
          </div>
          <div className="links">
            <span className="span-footer"><a href="https://bcnhostess.com/politica-privacidad/" target="_blank">Política de Privacidad</a></span>
            <span className="span-footer"><a href="https://candidatos.bcnhostess.com/registro/condiciones.pdf/" target="_blank">Términos de Uso</a></span>
            <span className="span-footer"><a href="https://bcnhostess.com/aviso-legal/" target="_blank">Legal</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
