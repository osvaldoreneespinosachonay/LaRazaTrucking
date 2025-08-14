import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header className="hero">
                <nav className="navbar">
                    <div className="logo">La Raza Trucking</div>
                    <ul>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#mision">Misión</a></li>
                        <li><a href="#vision">Visión</a></li>
                        <li><a href="#quienes-somos">Quiénes Somos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
                <div className="hero-content">
                    <h1>Transporte de carga confiable</h1>
                    <p>Conectamos destinos con puntualidad y seguridad</p>
                </div>
            </header>

            <section id="mision" className="section">
                <h2>Misión</h2>
                <p>
                    Ser parte importante del éxito de nuestros clientes proporcionando un servicio efectivo,
                    confiable y humano mediante la constante mejora en nuestro proceso.
                </p>
            </section>

            <section id="vision" className="section">
                <h2>Visión</h2>
                <p>
                    Ser una empresa líder en el transporte de carga consolidada y contar con la confianza de
                    todas las personas que requieran nuestros servicios.
                </p>
            </section>

            <section id="servicios" className="section">
                <h2>Servicios</h2>
                <p>
                    Ofrecemos soluciones rápidas y objetivas para facilitarle movimientos y procesos dentro
                    de su empresa. Carga desde la Ciudad de México a toda la República Mexicana.
                </p>
            </section>

            <section id="quienes-somos" className="section">
                <h2>Quiénes Somos</h2>
                <p>
                    Somos una empresa familiar dedicada a la transportación de carga general ofreciendo
                    servicios a empresas con necesidades de confiabilidad, calidad y buen servicio.
                </p>
            </section>

            <section id="contacto" className="section contacto">
                <h2>Contacto</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Nombre" required />
                    <input type="email" placeholder="Correo electrónico" required />
                    <textarea placeholder="Mensaje" rows="4" required></textarea>
                    <button type="submit">Enviar</button>
                </form>

                <div className="contact-info">
                    <h3>Información de contacto</h3>
                    <p><strong>Nombre:</strong> Dennis Espinoza Servin</p>
                    <p><strong>Teléfonos:</strong> 55 59 59 74 48 / 55 16 55 21 38</p>
                    <p><strong>Correo:</strong> espinoza_trans@outlook.com</p>
                    <p><strong>Dirección:</strong> Lago de Chapultepec No. 223, Col. Agua Azul, Cd. Nezahualcóyotl, C.P. 57500</p>
                </div>
            </section>

            <footer>
                © {new Date().getFullYear()} La Raza Trucking. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default Home;
