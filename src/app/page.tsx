"use client";

// Define o componente principal da página inicial.
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
    details: string;
  };

  const redesSociais = [
    {
      nome: "GitHub",
      href: "https://github.com/nicholasfocke",
      icone: "/components/github.svg",
    },
    {
      nome: "LinkedIn",
      href: "https://www.linkedin.com/in/nicholasfocke/",
      icone: "/components/linkedin.svg",
    },
    {
      nome: "WhatsApp",
      href: "https://wa.me/5548999999999",
      icone: "/components/whatsapp.svg",
    },
  ];

  const tecnologias = [
    { nome: "Firebase", icone: "/components/firebase-svgrepo-com.svg" },
    { nome: "MySQL", icone: "/components/mysql-svgrepo-com.svg" },
    { nome: "Next.js", icone: "/components/nextjs-svgrepo-com.svg" },
    { nome: "PostgreSQL", icone: "/components/postgresql-svgrepo-com.svg" },
    { nome: "Python", icone: "/components/python-svgrepo-com.svg" },
    { nome: "TypeScript", icone: "/components/typescript-svgrepo-com.svg" },
  ];

  const featuredProjects: Project[] = [
    {
      title: "ClinicAid",
      description: "Plataforma completa para gestão de clínicas, oferecendo dashboards inteligentes e relatórios em tempo real.",
      image: "/images/clinicaid.png",
      link: "#",
      details:
        "O ClinicAid centraliza o atendimento, cadastros de pacientes e indicadores de performance em um único ambiente integrado.",
    },
    {
      title: "Frida Kids",
      description: "E-commerce criativo voltado para o público infantil, com foco em experiência visual e acessibilidade.",
      image: "/images/fridakids.png",
      link: "https://fridakids.vercel.app/login",
      details:
        "O projeto Frida Kids conecta marcas e famílias através de catálogos dinâmicos, personalização de produtos e conteúdo editorial.",
    },
    {
      title: "Kontaki",
      description: "Aplicativo de automação comercial para organizar contatos, propostas e negociações em equipes comerciais.",
      image: "/images/kontaki.png",
      link: "https://www.kontaki.io/",
      details:
        "Kontaki acelera o ciclo de vendas reunindo histórico de interações, funil visual e integrações com ferramentas de CRM.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    // Container geral com altura mínima da tela e fundo escuro para reproduzir o visual desejado.
    <div className={styles.page}>
      {/* Limita a largura do conteúdo, centraliza e aplica preenchimentos responsivos. */}
      <div className={styles.wrapper}>
        {/* menu remoto conforme solicitado */}

        {/* Área principal da página, centralizando o conteúdo hero. */}
        <main id="home" className={styles.main}>
          {/* Cartão principal com bordas arredondadas, fundo translúcido e sombra suave. */}
          <section className={styles.heroCard}>
            <header className={styles.cardHeader}>
              <span className={styles.brand}>Nicholas Focke</span>
              <nav className={styles.socialLinks} aria-label="Redes sociais">
                {redesSociais.map((rede) => (
                  <a key={rede.nome} href={rede.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <Image src={rede.icone} alt={rede.nome} width={28} height={28} />
                  </a>
                ))}
              </nav>
            </header>

            {/* Bloco com textos introdutórios e chamada para ação. Coluna à esquerda + imagem à direita em desktop */}
            <section id="sobre" className={styles.heroContent}>
              <div className={styles.heroGrid}>
                <div className={styles.heroText}>
                  <div className={styles.heroHeadingGroup}>
                    <div className={styles.heroBadges}>
                      <span className={styles.heroBadge}>Back-end</span>
                      <span className={styles.heroBadge}>Front-end</span>
                      <span className={styles.heroBadge}>Database</span>
                      <span className={styles.heroBadge}>Integrações</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                      Olá, eu sou
                      <br />
                      <span className={styles.heroHighlight}>Nicholas Focke</span>
                    </h1>
                    <p className={styles.heroSubtitle}>Crio experiências digitais modernas e envolventes</p>
                  </div>

                  <p className={styles.heroDescription}>
                    Sou Nicholas Focke, desenvolvedor dedicado a construir aplicações web de alta qualidade, com foco em
                    desempenho, acessibilidade e estética. Minha missão é transformar ideias em interfaces intuitivas e
                    eficientes.
                  </p>

                  <div className={styles.heroCtaGroup}>
                    <a href="#projetos" className={styles.heroCta}>
                      Ver meus projetos
                    </a>
                    <a href="#contato" className={styles.secondaryCta}>
                      Entrar em contato
                    </a>
                  </div>
                </div>

                <div className={styles.heroVisual} aria-hidden="true">
                  <div className={styles.hexOrbit}>
                    <span className={styles.hexCore} />
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.marquee} aria-hidden="true">
              <div className={styles.marqueeTrack}>
                {[...tecnologias, ...tecnologias].map((tech, index) => (
                  <span key={`${tech.nome}-${index}`} className={styles.marqueeItem}>
                    <Image src={tech.icone} alt={tech.nome} width={32} height={32} />
                    <span>{tech.nome}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Seção de projetos em destaque localizada dentro do cartão principal. */}
            <section id="projetos" className={styles.projectsSection}>
              <h2 className={styles.projectsTitle}>Projetos em destaque</h2>
              {/* Grid preparado para múltiplos cartões de projetos com destaque visual. */}
              <div className={styles.projectsGrid}>
                {featuredProjects.map((project) => (
                  <button
                    key={project.title}
                    type="button"
                    className={styles.projectCard}
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Ver detalhes do projeto ${project.title}`}
                  >
                    <div className={styles.projectMedia}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.projectImage}
                      />
                      <span className={styles.projectTag}>Explorar projeto</span>
                    </div>
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <span className={styles.projectHint}>Clique para saber mais</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Bloco final com convite para contato e networking profissional. */}
            <section id="contato" className={styles.contactSection}>
              <div className={styles.contactContent}>
                <h2 className={styles.contactTitle}>Vamos conversar?</h2>
                <p>
                  Envie uma mensagem e explore como posso ajudar a transformar o seu próximo projeto digital em
                  realidade.
                </p>
              </div>
              <a href="mailto:contato@nicholasfocke.dev" className={styles.contactButton}>
                Escrever para Nicholas
              </a>
            </section>
          </section>
        </main>
      </div>

      {selectedProject && (
        <div
          className={styles.projectModalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={styles.projectModal}
            onClick={(event) => event.stopPropagation()}
          >
            <header className={styles.projectModalHeader}>
              <h3 id="project-modal-title" className={styles.projectModalTitle}>
                {selectedProject.title}
              </h3>
              <button
                type="button"
                className={styles.projectModalClose}
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar detalhes do projeto"
              >
                ✕
              </button>
            </header>
            <div className={styles.projectModalBody}>
              <p>{selectedProject.details}</p>
            </div>
            <footer className={styles.projectModalFooter}>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className={styles.projectModalLink}
              >
                Acessar projeto
              </a>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
