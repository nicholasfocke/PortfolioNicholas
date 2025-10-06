// Define o componente principal da página inicial.
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
    <div className="min-h-screen bg-[#05070d] text-white">
      {/* Limita a largura do conteúdo, centraliza e aplica preenchimentos responsivos. */}
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 md:px-12 lg:px-16">
        {/* Cabeçalho com logo nominal e navegação principal. */}
        <header className="flex items-center justify-between text-sm text-zinc-300">
          {/* Identidade mínima com o primeiro nome como assinatura visual. */}
          <span className="text-base font-semibold text-white">Nicholas</span>
          {/* Menu somente visível em telas médias ou maiores para manter o layout limpo no mobile. */}
          <nav className="hidden gap-8 md:flex">
            {navegacao.map((item) => (
              <a
                key={item.rotulo}
                href={item.destino}
                className="transition-colors hover:text-white"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>
        </header>

        {/* Área principal da página, centralizando o conteúdo hero. */}
        <main id="home" className="mt-14 flex flex-1 flex-col justify-center">
          {/* Cartão principal com bordas arredondadas, fundo translúcido e sombra suave. */}
          <section className="rounded-3xl border border-white/5 bg-[#0f1117]/95 p-10 shadow-[0_25px_80px_rgba(5,7,13,0.65)] backdrop-blur md:p-16">
            {/* Bloco com textos introdutórios e chamada para ação. */}
            <section id="sobre" className="max-w-2xl space-y-8">
              {/* Título principal com destaque em degradê para o nome. */}
              <div className="space-y-4">
                <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
                  Olá, eu sou
                  <br />
                  <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-white bg-clip-text text-transparent">
                    Nicholas Focke
                  </span>
                </h1>
                <p className="text-lg font-medium text-zinc-300 md:text-xl">
                  Crio experiências digitais modernas e envolventes
                </p>
              </div>

              {/* Parágrafo de apresentação explicando especialidades e foco profissional. */}
              <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                Sou Nicholas Focke, desenvolvedor dedicado a construir aplicações web de alta qualidade, com foco em
                desempenho, acessibilidade e estética. Minha missão é transformar ideias em interfaces intuitivas e
                eficientes.
              </p>

              {/* Botão principal incentivando a navegação para a vitrine de projetos. */}
              <div>
                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  Ver meus projetos
                </a>
              </div>
            </section>

            {/* Seção de projetos em destaque localizada dentro do cartão principal. */}
            <section id="projetos" className="mt-16 space-y-6">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Projetos em destaque</h2>
              {/* Grid preparado para expansão futura com mais cartões de projetos. */}
              <div className="grid gap-6 md:grid-cols-1">
                {/* Cartão individual de projeto com descrição resumida. */}
                <article className="rounded-2xl border border-white/5 bg-[#10131a] p-8 shadow-[0_18px_60px_rgba(5,7,13,0.55)] transition-transform duration-200 hover:-translate-y-1">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Painel Analítico Interativo</h3>
                    <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                      Aplicação desenvolvida com Next.js e integrações em tempo real para visualização de métricas e
                      indicadores personalizados.
                    </p>
                    <a
                      href="#contato"
                      className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                    >
                      Solicitar demonstração
                    </a>
                  </div>
                </article>
              </div>
            </section>

            {/* Bloco final com convite para contato e networking profissional. */}
            <section
              id="contato"
              className="mt-16 flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0d1016]/90 p-6 text-sm text-zinc-300 md:flex-row md:items-center md:justify-between"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-white">Vamos conversar?</h2>
                <p>
                  Envie uma mensagem e explore como posso ajudar a transformar o seu próximo projeto digital em
                  realidade.
                </p>
              </div>
              <a
                href="mailto:contato@nicholasfocke.dev"
                className="inline-flex items-center justify-center rounded-full border border-blue-400 px-6 py-2 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/10"
              >
                Escrever para Nicholas
              </a>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}
