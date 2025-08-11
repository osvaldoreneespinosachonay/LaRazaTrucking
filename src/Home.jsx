import React from "react";

function Home() {
    return (
        <div className="home">
            <header className="hero">
                <h1>La Raza Trucking</h1>
                <p>Soluciones logísticas de confianza a nivel nacional</p>
                <a href="#contact" className="btn">Solicita cotización</a>
            </header>

            <section id="about" className="info">
                <h2>Quiénes somos</h2>
                <p>En La Raza Trucking combinamos experiencia y tecnología para ofrecer transporte terrestre de carga seguro, puntual y eficiente en toda la República Mexicana.</p>
            </section>

            <section id="services" className="services">
                <h2>Nuestros servicios</h2>
                <ul>
                    <li>Transporte con cajas secas 48 y 53 pies</li>
                    <li>Fletes especializados y des consolación en destino</li>
                    <li>Rastreo satelital 24/7 con GPS</li>
                    <li>Recolecciones múltiples, entregas con cita y CEDIS</li>
                    <li>Entregas directas a tiendas y maniobras especializadas</li>
                    <li>Estadías y soporte completo en logística</li>
                </ul>
            </section>

            <section id="values" className="values">
                <h2>Nuestra filosofía</h2>
                <p><strong>Misión:</strong> Ser el socio estratégico en transporte de carga para nuestros clientes, con compromiso, seguridad y puntualidad.</p>
                <p><strong>Visión:</strong> Liderar el mercado nacional con innovación, servicio al cliente y excelencia operativa.</p>
                <p><strong>Valores:</strong> Confianza, productividad, profesionalismo, innovación, honestidad y trabajo en equipo.</p>
            </section>

            <section id="contact" className="contact">
                <h2>Contáctanos</h2>
                <p>Tel: 55‑1234‑5678 | Email: contacto@lara zatrucking.com.mx</p>
                <form>
                    <input type="text" placeholder="Nombre" required />
                    <input type="tel" placeholder="Teléfono" required />
                    <input type="email" placeholder="Correo electrónico" required />
                    <textarea placeholder="Mensaje" required />
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </div>
    );
}

export default Home;