"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../page.module.css";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  details: string;
};

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className={styles.projectsSection}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.sectionEyebrow}>Seleção recente</p>
          <h2 className={styles.projectsTitle}>Projetos em destaque</h2>
        </div>
        <p className={styles.sectionDescription}>
          Interfaces leves, integrações seguras e experiências pensadas para converter em qualquer dispositivo.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
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
                loading={project.title === projects[0].title ? "eager" : "lazy"}
                priority={project.title === projects[0].title}
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

      {selectedProject && (
        <div
          className={styles.projectModalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className={styles.projectModal} onClick={(event) => event.stopPropagation()}>
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
    </section>
  );
}
