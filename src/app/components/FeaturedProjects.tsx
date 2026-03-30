import styles from "../page.module.css";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
};

type FeaturedProjectsProps = {
  projects: Project[];
  sectionLabel: string;
  sectionTitle: string;
  projectLabel: string;
  repoLabel: string;
  demoLabel: string;
};

export function FeaturedProjects({
  projects,
  sectionLabel,
  sectionTitle,
  projectLabel,
  repoLabel,
  demoLabel,
}: FeaturedProjectsProps) {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionLabel}>{sectionLabel}</div>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.sectionLine} />

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <article key={project.title} className={styles.projectCard} data-reveal>
            <div className={styles.projectNumber}>
              {String(index + 1).padStart(2, "0")} / {projectLabel}
            </div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.projectTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.projectTag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.projectLinks}>
              <a href={project.repo} target="_blank" rel="noreferrer" className={styles.projectLink}>
                {repoLabel}
              </a>
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className={styles.projectLink}>
                  {demoLabel}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

