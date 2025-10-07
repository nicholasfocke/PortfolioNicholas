// Define o componente principal da página inicial.
import Image from "next/image";
import styles from "./page.module.css";

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
] as const;

const tecnologias = [
  { nome: "Firebase", icone: "/components/firebase-svgrepo-com.svg" },
  { nome: "MySQL", icone: "/components/mysql-svgrepo-com.svg" },
  { nome: "Next.js", icone: "/components/nextjs-svgrepo-com.svg" },
  { nome: "PostgreSQL", icone: "/components/postgresql-svgrepo-com.svg" },
  { nome: "Python", icone: "/components/python-svgrepo-com.svg" },
  { nome: "TypeScript", icone: "/components/typescript-svgrepo-com.svg" },
] as const;

export default function Home() {

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
                    <Image
                      src={rede.icone}
                      alt={rede.nome}
                      width={28}
                      height={28}
                      loading="lazy"
                      decoding="async"
                      sizes="28px"
                    />
                  </a>
                ))}
              </nav>
            </header>

            {/* Bloco com textos introdutórios e chamada para ação. */}
            <section id="sobre" className={styles.heroContent}>
              {/* Título principal com destaque em degradê para o nome. */}
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

              {/* Parágrafo de apresentação explicando especialidades e foco profissional. */}
              <p className={styles.heroDescription}>
                Sou Nicholas Focke, desenvolvedor dedicado a construir aplicações web de alta qualidade, com foco em
                desempenho, acessibilidade e estética. Minha missão é transformar ideias em interfaces intuitivas e
                eficientes.
              </p>

              {/* Botão principal incentivando a navegação para a vitrine de projetos. */}
              <div className={styles.heroCtaGroup}>
                <a href="#projetos" className={styles.heroCta}>
                  Ver meus projetos
                </a>
                <a href="#contato" className={styles.secondaryCta}>
                  Entrar em contato
                </a>
              </div>
            </section>

            <div className={styles.marquee} aria-hidden="true">
              <div className={styles.marqueeTrack}>
                {[...tecnologias, ...tecnologias].map((tech, index) => (
                  <span key={`${tech.nome}-${index}`} className={styles.marqueeItem}>
                    <Image
                      src={tech.icone}
                      alt={tech.nome}
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      sizes="32px"
                    />
                    <span>{tech.nome}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Seção de projetos em destaque localizada dentro do cartão principal. */}
            <section id="projetos" className={styles.projectsSection}>
              <h2 className={styles.projectsTitle}>Projetos em destaque</h2>
              {/* Grid preparado para expansão futura com mais cartões de projetos. */}
              <div className={styles.projectsGrid}>
                {/* Cartão individual de projeto com descrição resumida. */}
                <article className={styles.projectCard}>
                  <div className={styles.heroHeadingGroup}>
                    <h3 className={styles.projectTitle}>Painel Analítico Interativo</h3>
                    <p className={styles.projectDescription}>
                      Aplicação desenvolvida com Next.js e integrações em tempo real para visualização de métricas e
                      indicadores personalizados.
                    </p>
                    <a href="#contato" className={styles.projectLink}>
                      Solicitar demonstração
                    </a>
                  </div>
                </article>
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
    </div>
  );
}
