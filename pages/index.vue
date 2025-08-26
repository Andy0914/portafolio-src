<template>
    <div>
        <!-- Hero Section -->
        <section class="hero" id="inicio">
            <div class="container">
                <div class="hero-content">
                    <img src="/images/me.jpg" alt="Andrés Urias" class="profile-img">
                    <h1>Andrés Urias</h1>
                    <p>Ingeniero en Software</p>
                    <div class="btn-container">
                        <a href="#" class="btn btn-primary"><i class="fas fa-download"></i> Descargar CV</a>
                        <a href="https://github.com/Andy0914" target="_blank" class="btn btn-secondary"><i
                                class="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sobre Mí -->
        <section id="sobre-mi">
            <div class="container">
                <div class="section-title">
                    <h2>Sobre mí</h2>
                    <div class="divider"></div>
                </div>
                <div class="about">
                    <div class="about-content">
                        <div class="about-text">
                            <p>Soy Andrés Urias, Ingeniero en Software de 23 años originario de Sonora, México.
                                Desde siempre me ha apasionado la tecnología y el desarrollo de software.</p>
                            <p>Soy un desarrollador con experiencia en procesamiento de datos y automatización de flujos
                                de trabajo.
                                Disfruto resolviendo problemas complejos y creando soluciones eficientes que optimicen
                                procesos.</p>
                            <p>Cuando no estoy programando, me gusta mantenerme actualizado con las últimas tendencias
                                tecnológicas,
                                contribuir a proyectos de código abierto y compartir conocimientos con la comunidad de
                                desarrolladores.</p>
                        </div>
                        <div class="about-img">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                                alt="Trabajo en equipo">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Habilidades -->
        <section id="habilidades" style="background-color: #f8fafc; border-radius: 20px;">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <div class="container">
                <div class="section-title">
                    <h2>Habilidades Técnicas</h2>
                    <div class="divider"></div>
                </div>
                <div class="skills-grid">
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fab fa-js-square"></i>
                        </div>
                        <h3>JavaScript</h3>
                        <p>Lenguaje de programación para desarrollo web y servidor con Node.js</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fab fa-node-js"></i>
                        </div>
                        <h3>Node.js</h3>
                        <p>Entorno de ejecución para JavaScript en el lado del servidor</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fas fa-database"></i>
                        </div>
                        <h3>Bases de Datos</h3>
                        <p>MySQL y manejo de bases de datos relacionales</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fab fa-html5"></i>
                        </div>
                        <h3>HTML5</h3>
                        <p>Estructuración y semántica de contenido web</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fab fa-css3-alt"></i>
                        </div>
                        <h3>CSS3</h3>
                        <p>Estilos y diseño responsive para aplicaciones web</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fab fa-java"></i>
                        </div>
                        <h3>Java</h3>
                        <p>Lenguaje de programación orientado a objetos</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fas fa-file-excel"></i>
                        </div>
                        <h3>Procesamiento de Datos</h3>
                        <p>Manejo y procesamiento de archivos (PDF, JSON, Excel)</p>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <h3>Metodologías Ágiles</h3>
                        <p>Conocimiento en frameworks de desarrollo ágil</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Formación -->
        <section id="formacion">
            <div class="container">
                <div class="section-title">
                    <h2>Formación Académica</h2>
                    <div class="divider"></div>
                </div>
                <div class="education-timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">2019 - 2023</div>
                        <div class="timeline-content">
                            <h3>Ingeniería en Software</h3>
                            <p class="institution">Instituto Tecnológico de Sonora (ITSON)</p>
                            <p>Formación en desarrollo de software, algoritmos, bases de datos y metodologías ágiles.
                                Especialización en Java, HTML, CSS y Bootstrap.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-date">2016 - 2019</div>
                        <div class="timeline-content">
                            <h3>Técnico en Programación</h3>
                            <p class="institution">CBTIS 37</p>
                            <p>Especialidad en programación con enfoque en Java, PHP, HTML, desarrollo móvil y bases de
                                datos MySQL.
                                Uso de NetBeans como herramienta principal de desarrollo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experiencia -->
        <section id="experiencia" style="background-color: #f8fafc; border-radius: 20px;">
            <div class="container">
                <div class="section-title">
                    <h2>Experiencia Profesional</h2>
                    <div class="divider"></div>
                </div>
                <div class="experience-item">
                    <h3>Desarrollador JavaScript/Node.js</h3>
                    <p class="company">Empresa Actual</p>
                    <p class="date">2023 - Presente</p>
                    <p>Desarrollo de soluciones para procesamiento de archivos (PDF, JSON, Excel) y extracción de
                        información. Implementación de lógica de negocio para transformación y organización de datos en
                        formatos
                        específicos.</p>
                    <ul>
                        <li>Procesamiento y manipulación de archivos en diferentes formatos</li>
                        <li>Automatización de flujos de trabajo con datos</li>
                        <li>Extracción y transformación de información para generar reportes</li>
                        <li>Desarrollo de interfaces con <strong>Vue.js</strong> y <strong>Nuxt 3</strong> para
                            visualización de datos</li>
                        <li>Creación de gráficas interactivas con <strong>Chart.js</strong> para representación visual
                            de datos procesados</li>
                        <li>Integración con bases de datos corporativas para mostrar información en tiempo real</li>
                    </ul>

                    <div class="tech-stack">
                        <h4>Tecnologías utilizadas:</h4>
                        <div class="tech-tags">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Nuxt 3</span>
                            <span class="tech-tag">Chart.js</span>
                            <span class="tech-tag">Bases de Datos</span>
                            <span class="tech-tag">PDF Processing</span>
                            <span class="tech-tag">Excel</span>
                            <span class="tech-tag">JSON</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contacto -->
        <section id="contacto">
            <div class="container">
                <div class="contact">
                    <div class="section-title">
                        <h2>Contacto</h2>
                        <div class="divider"></div>
                    </div>
                    <p>¿Tienes un proyecto en mente? ¡Me encantaría conversar contigo sobre cómo puedo ayudar a hacerlo
                        realidad!</p>
                    <div class="contact-buttons">
                        <a href="mailto:urias.14@hotmail.com" class="contact-btn"><i class="fas fa-envelope"></i> Enviar
                            Email</a>
                        <a href="https://mx.linkedin.com/in/andres-urias-0b0795258" target="_blank"
                            class="contact-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="https://github.com/Andy0914" target="_blank" class="contact-btn"><i
                                class="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="container">
                <p>© 2024 Andrés Urias. Todos los derechos reservados.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
})
</script>

<style>
:root {
    --primary: #3B82F6;
    --secondary: #8B5CF6;
    --dark: #1F2937;
    --light: #F9FAFB;
    --gray: #6B7280;
    --accent: #10B981;
    --light-blue: #EFF6FF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--dark);
    background-color: var(--light);
    line-height: 1.6;
    scroll-behavior: smooth;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header y Navegación */
header {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-links a:hover {
    color: var(--primary);
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s;
}

.nav-links a:hover::after {
    width: 100%;
}

.menu-btn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    padding: 150px 0 100px;
    text-align: center;
    background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
    color: white;
    border-radius: 0 0 20px 20px;
    margin-bottom: 60px;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.profile-img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.5rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.btn-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
}

.btn-primary {
    background-color: white;
    color: var(--primary);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background-color: white;
    color: var(--primary);
}

.btn i {
    margin-right: 8px;
}

/* Secciones */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    font-size: 2.5rem;
    color: var(--dark);
    margin-bottom: 15px;
}

.divider {
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    margin: 0 auto;
    border-radius: 2px;
}

/* Sobre mí */
.about {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
    padding: 50px;
    margin-bottom: 60px;
}

.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-text {
    flex: 1;
}

.about-text p {
    margin-bottom: 20px;
    color: var(--gray);
    font-size: 1.1rem;
}

.about-img {
    flex: 1;
    text-align: center;
}

.about-img img {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Habilidades */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.skill-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.skill-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--primary);
}

.skill-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: var(--dark);
}

.skill-card p {
    color: var(--gray);
    line-height: 1.6;
}

/* Formación */
.education-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.education-timeline::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    height: 100%;
    width: 2px;
    background: var(--primary);
}

.timeline-item {
    position: relative;
    margin-bottom: 50px;
    padding-left: 80px;
}

.timeline-date {
    position: absolute;
    left: 0;
    top: 0;
    background: var(--primary);
    color: white;
    padding: 10px 15px;
    border-radius: 20px;
    font-weight: 600;
}

.timeline-content {
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.timeline-content h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: var(--dark);
}

.institution {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 10px;
}

.timeline-content p {
    color: var(--gray);
    line-height: 1.6;
}

/* Experiencia */
.experience-item {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    max-width: 800px;
    margin: 0 auto;
}

.experience-item h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--dark);
}

.company {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 5px;
}

.date {
    color: var(--gray);
    margin-bottom: 20px;
    font-style: italic;
}

.experience-item p {
    color: var(--gray);
    margin-bottom: 20px;
    line-height: 1.6;
}

.experience-item ul {
    padding-left: 20px;
    color: var(--gray);
}

.experience-item li {
    margin-bottom: 10px;
    line-height: 1.6;
}

/* Contacto */
.contact {
    background: linear-gradient(to bottom right, #F9FAFB, #E5E7EB);
    border-radius: 20px;
    padding: 60px 50px;
    text-align: center;
}

.contact p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    color: var(--gray);
}

.contact-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.contact-btn {
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    background-color: white;
    color: var(--primary);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    /* Agrega espacio entre icono y texto */
    gap: 8px;
}

.contact-btn i {
    margin-right: 8px;
}

.contact-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    background-color: var(--primary);
    color: white;
}

/* Footer */
footer {
    text-align: center;
    padding: 40px 0;
    margin-top: 60px;
    color: var(--gray);
    border-top: 1px solid #E5E7EB;
}

/* Responsive */
@media (max-width: 992px) {
    .about-content {
        flex-direction: column;
    }

    .about-img {
        order: -1;
    }

    .about-img img {
        max-width: 300px;
    }

    .education-timeline::before {
        left: 20px;
    }

    .timeline-item {
        padding-left: 60px;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .menu-btn {
        display: block;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1.2rem;
    }

    .btn {
        padding: 10px 20px;
    }

    .section-title h2 {
        font-size: 2rem;
    }

    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .education-timeline::before {
        display: none;
    }

    .timeline-item {
        padding-left: 0;
        margin-bottom: 30px;
    }

    .timeline-date {
        position: relative;
        margin-bottom: 15px;
        display: inline-block;
    }
}

@media (max-width: 576px) {
    .hero {
        padding: 120px 0 80px;
    }

    .btn-container {
        flex-direction: column;
        align-items: center;
    }

    .contact-buttons {
        flex-direction: column;
        align-items: center;
    }

    .contact-btn {
        width: 100%;
        justify-content: center;
    }

    .about {
        padding: 30px;
    }

    .experience-item {
        padding: 25px;
    }
}

.tech-stack {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid #e5e7eb;
}

.tech-stack h4 {
    margin-bottom: 12px;
    color: var(--dark);
    font-size: 1.1rem;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tech-tag {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}
</style>