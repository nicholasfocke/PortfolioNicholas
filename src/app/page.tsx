export default function Home() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 md:px-12 lg:px-16">
        <header className="flex items-center justify-between text-sm text-zinc-300">
          <span className="text-base font-semibold text-white">Nicholas</span>
          <nav className="hidden gap-8 md:flex">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main
          id="home"
          className="mt-14 flex flex-1 flex-col justify-center"
        >
          <section className="rounded-3xl border border-white/5 bg-[#0f1117]/95 p-10 shadow-[0_25px_80px_rgba(5,7,13,0.65)] backdrop-blur md:p-16">
            <div className="max-w-2xl space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
                  Hi, I&apos;m
                  <br />
                  <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-white bg-clip-text text-transparent">
                    Nicholas Focke
                  </span>
                </h1>
                <p className="text-lg font-medium text-zinc-300 md:text-xl">
                  Building modern web applications
                </p>
              </div>

              <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                I&apos;m Nicholas Focke, a developer specializing in building high-quality web applications using the latest
                technologies. Passionate about delivering exceptional user experiences.
              </p>

              <div>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </div>

            <section
              id="projects"
              className="mt-16 space-y-6"
            >
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Featured Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-1">
                <article className="rounded-2xl border border-white/5 bg-[#10131a] p-8 shadow-[0_18px_60px_rgba(5,7,13,0.55)] transition-transform duration-200 hover:-translate-y-1">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Project One</h3>
                    <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                      A web application built with Next.js and modern styling techniques.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                    >
                      View Project
                    </a>
                  </div>
                </article>
              </div>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}
