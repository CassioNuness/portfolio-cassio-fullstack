import { useEffect, useRef, useState } from "react";

import "./index.css";

import fotoPerfil from "./assets/foto_de_perfil.jpg";

import {
  profile,
  skills,
  services,
  projects,
  experiences,
} from "./data/portfolioData";

import { FaReact, FaNodeJs, FaPhp, FaPython, FaGitAlt } from "react-icons/fa";

import { SiJavascript, SiPostgresql, SiMysql } from "react-icons/si";

const skillIcons = {
  React: <FaReact />,
  JavaScript: <SiJavascript />,
  "Node.js": <FaNodeJs />,
  PHP: <FaPhp />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Python: <FaPython />,
  "Git/GitHub": <FaGitAlt />,
};

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const projectsRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollButtons() {
    const carousel = projectsRef.current;

    if (!carousel) {
      return;
    }

    setCanScrollLeft(carousel.scrollLeft > 0);

    setCanScrollRight(
      carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 5,
    );
  }

  useEffect(() => {
    updateScrollButtons();

    const carousel = projectsRef.current;

    if (!carousel) {
      return;
    }

    carousel.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      carousel.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  function scrollProjects(direction) {
    if (!projectsRef.current) {
      return;
    }

    const scrollAmount = 420;

    projectsRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 350);
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("Enviando...");

    try {
      const response = await fetch(
        "https://portfolio-cassio-backend.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Erro ao conectar com o servidor.");
    }
  }

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container">
          <h2>{profile.name}</h2>

          <nav>
            <a href="#about-me">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#projects">Projetos</a>
            <a href="#experience">Experiência</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="container hero-content">
          <div className="hero-image">
            <img src={fotoPerfil} alt="Cássio Leonard" />
          </div>

          <div className="hero-text">
            <h1>{profile.role}</h1>

            <p>{profile.description}</p>

            <div className="hero-buttons">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                LinkedIn
              </a>

              <a
                href="/curriculo-cassio.pdf"
                download
                className="btn secondary"
              >
                Baixar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about-me">
        <div className="container about-box">
          <h2>Sobre mim</h2>

          <p>
            Sou formado em Sistemas de Informação e venho construindo minha
            carreira na área de tecnologia com foco em desenvolvimento web,
            automação e soluções full stack. Tenho experiência prática com
            projetos reais, suporte técnico e desenvolvimento de sistemas com
            React, Node.js, PHP e bancos de dados SQL.
          </p>

          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index}>
                {skillIcons[skill]}
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <h2>Serviços</h2>

          <div className="grid">
            {services.map((service, index) => (
              <div className="card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="container">
          <div className="projects-header">
            <h2>Projetos</h2>
          </div>

          <div className="projects-wrapper">
            {canScrollLeft && (
              <button
                type="button"
                className="carousel-arrow carousel-arrow-left"
                onClick={() => scrollProjects("left")}
              >
                ‹
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                className="carousel-arrow carousel-arrow-right"
                onClick={() => scrollProjects("right")}
              >
                ›
              </button>
            )}

            <div className="projects-carousel" ref={projectsRef}>
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-placeholder">Projeto Privado</div>
                  )}

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="stack">
                      {project.stack.map((tech, techIndex) => (
                        <span key={techIndex}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-buttons">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn"
                        >
                          GitHub
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn secondary"
                        >
                          Ver Projeto
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <h2>Experiência</h2>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div className="experience-card" key={index}>
                <h3>{experience.role}</h3>
                <strong>{experience.company}</strong>
                <span>{experience.period}</span>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container contact-container">
          <h2>Contato</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Seu nome"
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Seu email"
              required
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Assunto"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="btn">
              Enviar Mensagem
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>

          <div className="contact-socials">
            <h3>Encontre-me em...</h3>

            <div className="social-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <footer className="footer">
            <p>© 2026 - Todos os direitos reservados.</p>
          </footer>
        </div>
      </section>
    </>
  );
}

export default App;
