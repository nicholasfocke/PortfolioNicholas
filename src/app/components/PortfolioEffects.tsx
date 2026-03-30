"use client";

import { useEffect } from "react";

type PortfolioEffectsProps = {
  rerenderKey?: string;
};

export function PortfolioEffects({ rerenderKey = "default" }: PortfolioEffectsProps) {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    revealElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isOnScreen = rect.top <= window.innerHeight * 0.92 && rect.bottom >= 0;
      if (isOnScreen) {
        element.classList.add("is-visible");
      }
      revealObserver.observe(element);
    });

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 140) {
          current = section.id;
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${current}`) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [rerenderKey]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cleanupCanvas = () => {};

    if (!reducedMotion) {
      const canvas = document.getElementById("graph-canvas") as HTMLCanvasElement | null;
      const ctx = canvas?.getContext("2d");

      if (canvas && ctx) {
        type Node = {
          x: number;
          y: number;
          vx: number;
          vy: number;
          r: number;
        };

        let nodes: Node[] = [];
        let width = 0;
        let height = 0;
        let raf = 0;

        const edgeDistance = 145;
        const color = "37,99,235";

        const resize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        };

        const initNodes = () => {
          nodes = [];
          const count = Math.floor((width * height) / 26000);
          for (let i = 0; i < count; i += 1) {
            nodes.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.3,
              vy: (Math.random() - 0.5) * 0.3,
              r: Math.random() * 1.8 + 0.8,
            });
          }
        };

        const draw = () => {
          ctx.clearRect(0, 0, width, height);

          nodes.forEach((node) => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
          });

          for (let i = 0; i < nodes.length; i += 1) {
            for (let j = i + 1; j < nodes.length; j += 1) {
              const dx = nodes[i].x - nodes[j].x;
              const dy = nodes[i].y - nodes[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < edgeDistance) {
                const alpha = (1 - distance / edgeDistance) * 0.35;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = `rgba(${color},${alpha})`;
                ctx.lineWidth = 0.65;
                ctx.stroke();
              }
            }
          }

          nodes.forEach((node) => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color},0.65)`;
            ctx.fill();
          });

          raf = window.requestAnimationFrame(draw);
        };

        resize();
        initNodes();
        draw();

        const onResize = () => {
          resize();
          initNodes();
        };

        window.addEventListener("resize", onResize);
        cleanupCanvas = () => {
          window.removeEventListener("resize", onResize);
          window.cancelAnimationFrame(raf);
        };
      }
    }

    let cleanupCursor = () => {};
    const cursorDot = document.getElementById("cursorDot");
    const cursorRing = document.getElementById("cursorRing");
    const canUseCursor =
      !!cursorDot &&
      !!cursorRing &&
      !reducedMotion &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (canUseCursor && cursorDot && cursorRing) {
      let mouseX = 0;
      let mouseY = 0;
      let ringX = 0;
      let ringY = 0;
      let ringRaf = 0;

      const onMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      };

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;

        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;

        ringRaf = window.requestAnimationFrame(animateRing);
      };

      const hoverables = document.querySelectorAll("a, button");
      const onEnter = () => {
        cursorRing.style.width = "46px";
        cursorRing.style.height = "46px";
        cursorRing.style.borderColor = "rgba(59,130,246,0.72)";
      };
      const onLeave = () => {
        cursorRing.style.width = "28px";
        cursorRing.style.height = "28px";
        cursorRing.style.borderColor = "rgba(59,130,246,0.42)";
      };

      hoverables.forEach((element) => {
        element.addEventListener("mouseenter", onEnter);
        element.addEventListener("mouseleave", onLeave);
      });

      document.addEventListener("mousemove", onMouseMove);
      animateRing();

      cleanupCursor = () => {
        hoverables.forEach((element) => {
          element.removeEventListener("mouseenter", onEnter);
          element.removeEventListener("mouseleave", onLeave);
        });

        document.removeEventListener("mousemove", onMouseMove);
        window.cancelAnimationFrame(ringRaf);
      };
    }

    return () => {
      cleanupCanvas();
      cleanupCursor();
    };
  }, []);

  return null;
}
