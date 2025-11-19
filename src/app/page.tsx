// Define o componente principal da página inicial.
import Image from "next/image";
import styles from "./page.module.css";
import { FeaturedProjects, type Project } from "./components/FeaturedProjects";

export default function Home() {

  const redesSociais = [
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
      title: "Kontaki",
      description: "Aplicativo de automação comercial para organizar contatos, propostas e negociações em equipes comerciais.",
      image: "/images/kontaki.png",
      link: "https://www.kontaki.io/",
      details:
        "Kontaki acelera o ciclo de vendas reunindo histórico de interações, funil visual e integrações com ferramentas de CRM.",
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
      title: "ClinicAid",
      description: "Plataforma completa para gestão de clínicas, oferecendo dashboards inteligentes e relatórios em tempo real.",
      image: "/images/clinicaid.png",
      link: "#",
      details:
        "O ClinicAid centraliza o atendimento, cadastros de pacientes e indicadores de performance em um único ambiente integrado.",
    },
  ];

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
                    <a href="mailto:nicholasfocke05@gmail.com" className={styles.secondaryCta}>
                      Entrar em contato
                    </a>
                  </div>
                </div>

                <div className={styles.heroVisual} aria-hidden="true">
                  <div className={styles.heroVisualCard}>
                    <p className={styles.heroVisualEyebrow}>Disponível para novos desafios</p>
                    <p className={styles.heroVisualTitle}>+30 entregas completas</p>
                    <p className={styles.heroVisualSubtitle}>
                      SaaS, plataformas clínicas, e-commerces e integrações de automação comercial.
                    </p>
                  </div>
                  <div className={styles.heroVisualStats}>
                    <div>
                      <span className={styles.heroStatLabel}>Experiência</span>
                      <strong className={styles.heroStatValue}>5+ anos</strong>
                    </div>
                    <div>
                      <span className={styles.heroStatLabel}>Especialidades</span>
                      <strong className={styles.heroStatValue}>Full-stack & Data</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.techSection} aria-label="Tecnologias favoritas">
              <div className={styles.sectionHeading}>
                <div>
                  <p className={styles.sectionEyebrow}>Stack principal</p>
                  <h2 className={styles.techTitle}>Tecnologias que uso no dia a dia</h2>
                </div>
                <p className={styles.sectionDescription}>
                  Bases sólidas para performance, escalabilidade e qualidade visual.
                </p>
              </div>
              <ul className={styles.techList}>
                {tecnologias.map((tech) => (
                  <li key={tech.nome} className={styles.techItem}>
                    <span className={styles.techIconWrapper}>
                      <Image src={tech.icone} alt={tech.nome} width={28} height={28} />
                    </span>
                    <span>{tech.nome}</span>
                  </li>
                ))}
              </ul>
            </section>

            <FeaturedProjects projects={featuredProjects} />

            {/* Bloco final com convite para contato e networking profissional. */}
            <section id="contato" className={styles.contactSection}>
              <div className={styles.contactContent}>
                <h2 className={styles.contactTitle}>Vamos conversar?</h2>
                <p>
                  Envie uma mensagem e explore como posso ajudar a transformar o seu próximo projeto digital em
                  realidade.
                </p>
              </div>
              <a href="mailto:nicholasfocke05@gmail.com" className={styles.contactButton}>
                Escrever para Nicholas
              </a>
            </section>
          </section>
        </main>
      </div>

    </div>
  );
}
