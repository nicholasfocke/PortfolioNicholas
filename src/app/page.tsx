"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { FeaturedProjects, type Project } from "./components/FeaturedProjects";
import { PortfolioEffects } from "./components/PortfolioEffects";

type Locale = "pt" | "en";

type SocialLink = {
  nome: string;
  href: string;
  icone: string;
};

type TechItem = {
  nome: string;
  icone?: string;
  simbolo?: string;
};

type TimelineItem = {
  periodo: string;
  cargo: string;
  local: string;
  descricao: string;
};

type HomeContent = {
  nav: {
    about: string;
    journey: string;
    projects: string;
    contact: string;
  };
  hero: {
    tag: string;
    titleRole: string;
    subtitle: string;
    badges: string[];
    primaryCta: string;
    secondaryCta: string;
    available: string;
    availableStrong: string;
  };
  backendSkills: {
    sectionLabel: string;
    title: string;
    backendLabel: string;
    backendItems: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    stats: Array<{ value: string; label: string }>;
    stackLabel: string;
  };
  experience: {
    sectionLabel: string;
    title: string;
    items: TimelineItem[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    projectLabel: string;
    technologiesLabel: string;
    repoLabel: string;
    demoLabel: string;
    items: Project[];
  };
  contact: {
    sectionLabel: string;
    title: string;
    text: string;
    cta: string;
  };
  footer: string;
  tech: TechItem[];
};

const socialLinks: SocialLink[] = [
  {
    nome: "GitHub",
    href: "https://github.com/nicholasfocke",
    icone: "/components/github.svg",
  },
  {
    nome: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholas-focke-833049269/",
    icone: "/components/linkedin.svg",
  },
  {
    nome: "WhatsApp",
    href: "https://wa.me/5582999040045",
    icone: "/components/whatsapp.svg",
  },
];

const content: Record<Locale, HomeContent> = {
  pt: {
    nav: {
      about: "Sobre",
      journey: "Jornada",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      tag: "Backend focused - Java ecosystem",
      titleRole: "Backend Developer (Java & Spring Boot)",
      subtitle: "Engenheiro de software focado em backend moderno, APIs robustas, regras de negócio e arquitetura escalável.",
      badges: ["Java", "Spring Boot", "JPA/Hibernate", "H2 Database", "PostgreSQL"],
      primaryCta: "Ver projetos",
      secondaryCta: "Entrar em contato",
      available: "Disponível para novos desafios",
      availableStrong: "Backend, integrações e produto",
    },
    backendSkills: {
      sectionLabel: "01 - Backend Skills",
      title: "Especialidades de Back-end",
      backendLabel: "Backend",
      backendItems: "Java • Spring Boot • REST APIs • JPA • PostgreSQL",
    },
    about: {
      sectionLabel: "02 - Sobre",
      title: "Quem eu sou",
      paragraph1:
        "Meu nome é Nicholas Focke, tenho 21 anos e atualmente estou no quarto semestre do Bacharelado em Sistemas de Informação no Centro Universitário Cesmac.",
      paragraph2:
        "Sou um profissional autodidata, dedicado e com grande capacidade de aprendizado rápido. Tenho facilidade para atuar de forma independente e colaborativa, contribuindo com ideias e soluções para objetivos em conjunto, com foco atual na stack backend Java.",
      stats: [
        { value: "4º", label: "Semestre no Cesmac" },
        { value: "3", label: "Projetos principais" },
        { value: "Java", label: "Foco atual em backend" },
        { value: "Team", label: "Atuação individual e colaborativa" },
      ],
      stackLabel: "Stack principal",
    },
    experience: {
      sectionLabel: "03 - Experiência",
      title: "Minha jornada",
      items: [
        {
          periodo: "2024 - Atual",
          cargo: "Bacharelado em Sistemas de Informação",
          local: "Centro Universitário Cesmac - 4º semestre",
          descricao:
            "Atualmente curso Sistemas de Informação no Cesmac. Sou autodidata, dedicado e com grande capacidade de aprendizado rápido, atuando bem de forma independente e em equipe.",
        },
        {
          periodo: "Projetos",
          cargo: "Aplicações entregues",
          local: "Kontaki, Frida Kids e ClinicAid",
          descricao:
            "Desenvolvi projetos com foco em experiência do usuário e entrega de valor, participando da implementação de funcionalidades, organização técnica e evolução contínua dos produtos.",
        },
        {
          periodo: "Agora",
          cargo: "Foco em Back-end Java",
          local: "Java, Spring Boot, JPA/Hibernate, JUnit e H2 Database",
          descricao:
            "Estou aprofundando arquitetura backend com Java e Spring Boot, com foco em APIs robustas, persistência de dados, testes automatizados e boas práticas de engenharia.",
        },
      ],
    },
    projects: {
      sectionLabel: "04 - Projetos",
      title: "Projetos em destaque",
      projectLabel: "Projeto",
      technologiesLabel: "Tecnologias",
      repoLabel: "GitHub",
      demoLabel: "Demo",
      items: [
        {
          title: "Kontaki",
          description:
            "Sistema de gerenciamento de feedback com regras de classificação, organização de chamados e integração com serviços de dados para apoiar decisões operacionais.",
          technologies: "Java • Spring Boot • PostgreSQL • REST APIs",
          tags: ["Spring Boot", "Java", "PostgreSQL", "REST API"],
          repo: "https://github.com/nicholasfocke",
          demo: "https://www.kontaki.io/",
        },
        {
          title: "Frida Kids",
          description:
            "Back-end de agendamento com validação de disponibilidade, aplicação de regras de negócio por faixa de horário e integração de dados entre clientes, serviços e profissionais.",
          technologies: "Java • Spring Boot • PostgreSQL • Postman",
          tags: ["Spring Boot", "Java", "PostgreSQL", "Postman"],
          repo: "https://github.com/nicholasfocke",
          demo: "https://fridakids.vercel.app/login",
        },
        {
          title: "ClinicAid",
          description:
            "Camada de serviços para gestão clínica com persistência estruturada, consultas para indicadores e integração por API para consolidar dados de atendimento.",
          technologies: "Java • Spring Boot • JPA/Hibernate • PostgreSQL",
          tags: ["Spring Boot", "JPA", "PostgreSQL", "REST API"],
          repo: "https://github.com/nicholasfocke",
        },
        {
          title: "Backend API (Spring Boot)",
          status: "Em andamento",
          description:
            "API REST orientada a domínio para operações de cadastro e consulta, com foco em consistência de dados e organização em camadas.",
          highlights: [
            "REST API com operações CRUD",
            "Integração com banco PostgreSQL",
            "Arquitetura em camadas (Controller, Service, Repository)",
            "Testes de endpoints com Postman",
          ],
          technologies: "Java • Spring Boot • PostgreSQL • Postman",
          tags: ["Java", "Spring Boot", "PostgreSQL", "Postman"],
          repo: "https://github.com/nicholasfocke",
        },
      ],
    },
    contact: {
      sectionLabel: "05 - Contato",
      title: "Vamos conversar",
      text: "Estou aberto para oportunidades em desenvolvimento backend e projetos que precisem de arquitetura sólida.",
      cta: "Enviar e-mail",
    },
    footer: "Desenvolvido por",
    tech: [
      { nome: "Java", icone: "/components/java-original.svg" },
      { nome: "Spring Boot", icone: "/components/springboot.svg" },
      { nome: "JPA", simbolo: "JPA" },
      { nome: "Hibernate", icone: "/components/hibernate.svg" },
      { nome: "Testes (JUnit)", icone: "/components/junit5.svg" },
      { nome: "H2 Database", simbolo: "H2" },
      { nome: "Postman", icone: "/components/postman.svg" },
      { nome: "PostgreSQL", icone: "/components/postgresql.svg" },
      { nome: "Firebase", icone: "/components/firebase.svg" },
      { nome: "Next.js", icone: "/components/nextdotjs.svg" },
    ],
  },
  en: {
    nav: {
      about: "About",
      journey: "Journey",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tag: "Backend focused - Java ecosystem",
      titleRole: "Backend Developer (Java & Spring Boot)",
      subtitle: "Software engineer focused on modern backend, robust APIs, business rules, and scalable architecture.",
      badges: ["Java", "Spring Boot", "JPA/Hibernate", "H2 Database", "PostgreSQL"],
      primaryCta: "View projects",
      secondaryCta: "Get in touch",
      available: "Available for new challenges",
      availableStrong: "Backend, integrations, and product",
    },
    backendSkills: {
      sectionLabel: "01 - Backend Skills",
      title: "Backend Skills",
      backendLabel: "Backend",
      backendItems: "Java • Spring Boot • REST APIs • JPA • PostgreSQL",
    },
    about: {
      sectionLabel: "02 - About",
      title: "Who I am",
      paragraph1:
        "My name is Nicholas Focke, I am 21 years old, and I am currently in the fourth semester of a Bachelor degree in Information Systems at Centro Universitário Cesmac.",
      paragraph2:
        "I am a dedicated, self-taught professional with a strong ability to learn quickly. I work well both independently and collaboratively, contributing ideas and solutions toward shared goals, with a current focus on the Java backend stack.",
      stats: [
        { value: "4th", label: "Semester at Cesmac" },
        { value: "3", label: "Main projects" },
        { value: "Java", label: "Current backend focus" },
        { value: "Team", label: "Independent and collaborative work" },
      ],
      stackLabel: "Main stack",
    },
    experience: {
      sectionLabel: "03 - Experience",
      title: "My journey",
      items: [
        {
          periodo: "2024 - Present",
          cargo: "Bachelor in Information Systems",
          local: "Centro Universitário Cesmac - 4th semester",
          descricao:
            "I am currently studying Information Systems at Cesmac. I am self-taught, dedicated, and a fast learner, working effectively both independently and in teams.",
        },
        {
          periodo: "Projects",
          cargo: "Delivered applications",
          local: "Kontaki, Frida Kids, and ClinicAid",
          descricao:
            "I have built projects focused on user experience and value delivery, contributing to feature implementation, technical organization, and continuous product evolution.",
        },
        {
          periodo: "Now",
          cargo: "Java Back-end focus",
          local: "Java, Spring Boot, JPA/Hibernate, JUnit, and H2 Database",
          descricao:
            "I am deepening backend architecture with Java and Spring Boot, focusing on robust APIs, data persistence, automated testing, and solid engineering practices.",
        },
      ],
    },
    projects: {
      sectionLabel: "04 - Projects",
      title: "Featured projects",
      projectLabel: "Project",
      technologiesLabel: "Technologies",
      repoLabel: "GitHub",
      demoLabel: "Demo",
      items: [
        {
          title: "Kontaki",
          description:
            "Feedback management system with classification rules, ticket organization, and data-service integration to support operational decisions.",
          technologies: "Java • Spring Boot • PostgreSQL • REST APIs",
          tags: ["Spring Boot", "Java", "PostgreSQL", "REST API"],
          repo: "https://github.com/nicholasfocke",
          demo: "https://www.kontaki.io/",
        },
        {
          title: "Frida Kids",
          description:
            "Scheduling backend with availability validation, business-rule enforcement by time slot, and API data integration across customers, services, and professionals.",
          technologies: "Java • Spring Boot • PostgreSQL • Postman",
          tags: ["Spring Boot", "Java", "PostgreSQL", "Postman"],
          repo: "https://github.com/nicholasfocke",
          demo: "https://fridakids.vercel.app/login",
        },
        {
          title: "ClinicAid",
          description:
            "Service layer for clinic management with structured persistence, indicator queries, and API integrations to consolidate appointment data.",
          technologies: "Java • Spring Boot • JPA/Hibernate • PostgreSQL",
          tags: ["Spring Boot", "JPA", "PostgreSQL", "REST API"],
          repo: "https://github.com/nicholasfocke",
        },
        {
          title: "Backend API (Spring Boot)",
          status: "In progress",
          description:
            "Domain-oriented REST API for create/read/update/delete flows with focus on data consistency and clean layered architecture.",
          highlights: [
            "REST API with CRUD operations",
            "Integration with PostgreSQL database",
            "Layered architecture (Controller, Service, Repository)",
            "Endpoint testing with Postman",
          ],
          technologies: "Java • Spring Boot • PostgreSQL • Postman",
          tags: ["Java", "Spring Boot", "PostgreSQL", "Postman"],
          repo: "https://github.com/nicholasfocke",
        },
      ],
    },
    contact: {
      sectionLabel: "05 - Contact",
      title: "Let us connect",
      text: "I am open to backend development opportunities and projects that need solid architecture.",
      cta: "Send e-mail",
    },
    footer: "Built by",
    tech: [
      { nome: "Java", icone: "/components/java-original.svg" },
      { nome: "Spring Boot", icone: "/components/springboot.svg" },
      { nome: "JPA", simbolo: "JPA" },
      { nome: "Hibernate", icone: "/components/hibernate.svg" },
      { nome: "Testing (JUnit)", icone: "/components/junit5.svg" },
      { nome: "H2 Database", simbolo: "H2" },
      { nome: "Postman", icone: "/components/postman.svg" },
      { nome: "PostgreSQL", icone: "/components/postgresql.svg" },
      { nome: "Firebase", icone: "/components/firebase.svg" },
      { nome: "Next.js", icone: "/components/nextdotjs.svg" },
    ],
  },
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt");
  const t = content[locale];
  const email = "nicholasfocke05@gmail.com";

  return (
    <div className={styles.page}>
      <canvas id="graph-canvas" className={styles.graphCanvas} aria-hidden="true" />
      <div id="cursorDot" className={styles.cursorDot} aria-hidden="true" />
      <div id="cursorRing" className={styles.cursorRing} aria-hidden="true" />
      <PortfolioEffects rerenderKey={locale} />

      <nav className={styles.navbar}>
        <div className={styles.wrap}>
          <a href="#hero" className={styles.navLogo}>
            Nicholas Focke
          </a>

          <div className={styles.navRight}>
            <ul className={styles.navLinks}>
              <li>
                <a href="#about" data-nav-link>
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#experience" data-nav-link>
                  {t.nav.journey}
                </a>
              </li>
              <li>
                <a href="#projects" data-nav-link>
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#contact" data-nav-link>
                  {t.nav.contact}
                </a>
              </li>
            </ul>

            <div className={styles.languageSwitch} aria-label="Language switcher">
              <button
                type="button"
                onClick={() => setLocale("pt")}
                className={`${styles.langButton} ${locale === "pt" ? styles.langButtonActive : ""}`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`${styles.langButton} ${locale === "en" ? styles.langButtonActive : ""}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.wrap}>
        <section id="hero" className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div>
              <p className={styles.heroTag}>{t.hero.tag}</p>
              <h1 className={styles.heroName}>
                Nicholas
                <br />
                Focke
              </h1>
              {/* Repositioned headline to make backend role explicit */}
              <p className={styles.heroRole}>{t.hero.titleRole}</p>
              <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>

              <div className={styles.heroBadges}>
                {t.hero.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>

              <div className={styles.heroActions}>
                <a href="#projects" className={styles.primaryButton}>
                  {t.hero.primaryCta}
                </a>
                <a href={`mailto:${email}`} className={styles.outlineButton}>
                  {t.hero.secondaryCta}
                </a>
              </div>
              <p className={styles.copyEmail}>
                Email:{" "}
                <a href={`mailto:${email}`} className={styles.copyEmailLink}>
                  {email}
                </a>
              </p>
            </div>

            <div className={styles.heroProfile} data-reveal>
              <div className={styles.profileFrame}>
                <span className={styles.profileInitials}>NF</span>
              </div>
              <div className={styles.profileMeta}>
                <span>{t.hero.available}</span>
                <strong>{t.hero.availableStrong}</strong>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* New section near the top to highlight backend stack first */}
        <section id="backend-skills" className={styles.section}>
          <div className={styles.sectionLabel}>{t.backendSkills.sectionLabel}</div>
          <h2 className={styles.sectionTitle}>{t.backendSkills.title}</h2>
          <div className={styles.sectionLine} />
          <div className={styles.backendSkillsCard} data-reveal>
            <span className={styles.backendSkillsLabel}>{t.backendSkills.backendLabel}:</span>
            <p className={styles.backendSkillsText}>{t.backendSkills.backendItems}</p>
          </div>
        </section>

        <hr className={styles.divider} />

        <section id="about" className={styles.section}>
          <div className={styles.sectionLabel}>{t.about.sectionLabel}</div>
          <h2 className={styles.sectionTitle}>{t.about.title}</h2>
          <div className={styles.sectionLine} />

          <div className={styles.aboutGrid}>
            <div>
              <p className={styles.aboutText}>{t.about.paragraph1}</p>
              <p className={styles.aboutText}>{t.about.paragraph2}</p>

              <div className={styles.statsGrid}>
                {t.about.stats.map((stat) => (
                  <div key={`${stat.value}-${stat.label}`} className={styles.statCard} data-reveal>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className={styles.sectionLabel}>{t.about.stackLabel}</div>
              <ul className={styles.stackGrid}>
                {t.tech.map((tech) => (
                  <li key={tech.nome} className={styles.stackCard} data-reveal>
                    <span className={styles.stackIcon}>
                      {tech.icone ? (
                        <Image src={tech.icone} alt={tech.nome} width={22} height={22} />
                      ) : (
                        <span className={styles.stackSymbol}>{tech.simbolo}</span>
                      )}
                    </span>
                    <span>{tech.nome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />

        <section id="experience" className={styles.section}>
          <div className={styles.sectionLabel}>{t.experience.sectionLabel}</div>
          <h2 className={styles.sectionTitle}>{t.experience.title}</h2>
          <div className={styles.sectionLine} />

          <div className={styles.timeline}>
            {t.experience.items.map((item) => (
              <article key={`${item.periodo}-${item.cargo}`} className={styles.timelineItem} data-reveal>
                <div className={styles.timelineDot} />
                <div className={styles.timelinePeriod}>{item.periodo}</div>
                <h3 className={styles.timelineRole}>{item.cargo}</h3>
                <p className={styles.timelineOrg}>{item.local}</p>
                <p className={styles.timelineDescription}>{item.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        <FeaturedProjects
          projects={t.projects.items}
          sectionLabel={t.projects.sectionLabel}
          sectionTitle={t.projects.title}
          projectLabel={t.projects.projectLabel}
          technologiesLabel={t.projects.technologiesLabel}
          repoLabel={t.projects.repoLabel}
          demoLabel={t.projects.demoLabel}
        />

        <hr className={styles.divider} />

        <section id="contact" className={styles.sectionContact}>
          <div className={styles.sectionLabel}>{t.contact.sectionLabel}</div>
          <h2 className={styles.sectionTitleCenter}>{t.contact.title}</h2>
          <div className={styles.sectionLineCenter} />
          <p className={styles.contactText}>{t.contact.text}</p>
          <a href={`mailto:${email}`} className={styles.primaryButton}>
            {t.contact.cta}
          </a>
          <p className={styles.copyEmail}>
            Email:{" "}
            <a href={`mailto:${email}`} className={styles.copyEmailLink}>
              {email}
            </a>
          </p>

          <div className={styles.contactSocials}>
            {socialLinks.map((rede) => (
              <a key={rede.nome} href={rede.href} target="_blank" rel="noreferrer" className={styles.contactSocialLink}>
                <Image src={rede.icone} alt={rede.nome} width={14} height={14} />
                {rede.nome}
              </a>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            {t.footer} <span>Nicholas Focke</span> - 2026
          </p>
          <p className={styles.footerEmail}>{email}</p>
        </footer>
      </main>
    </div>
  );
}
