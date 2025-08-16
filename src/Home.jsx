import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="main-container">
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
                    <p><strong>Comprueba el estado de nuestras unidades solicitando una cita de inspección.</strong></p>

                    <h3>Nosotros</h3>
                    <p>
                        En <strong>Transportes La Raza Trucking</strong> valoramos a nuestro equipo humano. Creemos en la productividad compartida, destacando los valores de cada colaborador, promoviendo una capacitación constante y brindando una dirección clara para crear un ambiente de trabajo sólido y profesional.
                    </p>

                    <p>
                        Te invitamos a comprobar que nuestros servicios de transporte de carga son lo que tu empresa necesita para movilizar mercancía de forma segura y eficiente a cualquier punto de la República Mexicana.
                    </p>

                    <h3>Sistemas de fletes especializados</h3>
                    <ul>
                        <li>Cajas secas de 48 y 53 pies</li>
                        <li>Desconsolidación en destino</li>
                        <li>Recolecciones en una o varias empresas</li>
                        <li>Entregas con citas programadas</li>
                        <li>Entregas a centros de distribución (CEDIS)</li>
                    </ul>

                    <h3>Distribución y maniobras</h3>
                    <ul>
                        <li>Entregas directas a tiendas de autoservicio y abarroteras</li>
                        <li>Repartos y maniobras de carga/descarga</li>
                        <li>Entrega y recepción de mercancía a detalle</li>
                        <li>Estadías programadas</li>
                    </ul>

                    <h3>Tecnología y equipo</h3>
                    <p>
                        Todas nuestras unidades están equipadas con sistemas de <strong>rastreo satelital GPS</strong>, lo que permite monitorear su ubicación en tiempo real. Este sistema brinda a nuestros clientes total visibilidad y seguridad horaria y métrica para cada envío.
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
                    <form
                        className="contact-form"
                        action="https://formspree.io/f/mldlvwwq"
                        method="POST"
                        acceptCharset="UTF-8"
                    >
                        <input type="text" name="name" placeholder="Nombre" required />
                        <input type="email" name="email" placeholder="Correo electrónico" required />
                        <textarea name="message" placeholder="Mensaje" rows="4" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>

                    <div className="contact-info">
                        <h3>Información de contacto</h3>
                        <p><strong>Teléfonos:</strong> 55 59 59 74 48 / 55 16 55 21 38</p>
                        <p><strong>Correo:</strong> larazatrukingtransport@outlook.com</p>
                        <p><strong>Ubicación:</strong> Cd. Nezahualcóyotl, Estado de México</p>
                    </div>
                </section>

                <footer>
                    © {new Date().getFullYear()} La Raza Trucking. Todos los derechos reservados.
                </footer>
            </div>
        </div>
    );
};

export default Home;
