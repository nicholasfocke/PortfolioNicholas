// Define o componente principal da página inicial.
import styles from "./page.module.css";

export default function Home() {
  // Lista de links do menu superior para facilitar a navegação entre seções internas.
  const navegacao = [
    { rotulo: "Início", destino: "#home" },
    { rotulo: "Sobre", destino: "#sobre" },
    { rotulo: "Projetos", destino: "#projetos" },
    { rotulo: "Contato", destino: "#contato" },
  ];

  return (
    // Container geral com altura mínima da tela e fundo escuro para reproduzir o visual desejado.
    <div className={styles.page}>
      {/* Limita a largura do conteúdo, centraliza e aplica preenchimentos responsivos. */}
      <div className={styles.wrapper}>
        {/* Cabeçalho com logo nominal e navegação principal. */}
        <header className={styles.header}>
          {/* Identidade mínima com o primeiro nome como assinatura visual. */}
          <span className={styles.brand}>Nicholas</span>
          {/* Menu somente visível em telas médias ou maiores para manter o layout limpo no mobile. */}
          <nav className={styles.navigation}>
            {navegacao.map((item) => (
              <a key={item.rotulo} href={item.destino} className={styles.navLink}>
                {item.rotulo}
              </a>
            ))}
          </nav>
        </header>

        {/* Área principal da página, centralizando o conteúdo hero. */}
        <main id="home" className={styles.main}>
          {/* Cartão principal com bordas arredondadas, fundo translúcido e sombra suave. */}
          <section className={styles.heroCard}>
            {/* Bloco com textos introdutórios e chamada para ação. */}
            <section id="sobre" className={styles.heroContent}>
              {/* Título principal com destaque em degradê para o nome. */}
              <div className={styles.heroHeadingGroup}>
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
              <div>
                <a href="#projetos" className={styles.heroCta}>
                  Ver meus projetos
                </a>
              </div>
            </section>

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
