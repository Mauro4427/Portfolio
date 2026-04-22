const portfolio = {
  person: {
    name: "Mauro Neopensi",
    location: "Remoto / Presencial",
    availability: "Disponible",
    email: "imauro4427@gmail.com",
    links: {
      github: "https://github.com/Mauro4427",
      linkedin: "https://www.linkedin.com/in/tu-usuario/",
    },
  },
  experience: [
    {
      title: "Backend Developer",
      company: "Microsoft ltd.",
      period: "2024 — Presente",
      location: "Remoto",
      highlights: [
        "Diseñé y mantuve APIs REST para un producto B2B con miles de usuarios.",
        "Optimicé consultas SQL y reduje tiempos de respuesta en ~40%.",
        "Implementé logging estructurado y métricas para mejorar observabilidad.",
      ],
      tech: ["Python", "SQL", "Docker", "CI/CD"],
    },
    {
      title: "Software Engineer (Intern / Junior)",
      company: "Grupo Oro",
      period: "2025 — 2026",
      location: "Remoto",
      highlights: [
        "Construí servicios internos y automatizaciones para operaciones.",
        "Mejora de eficiencia y productividad en el flujo de trabajo de distintos servicios.",
        "Colaboracion en desarrolo y diseño de aplicaciones web de proyectos recientes.",
      ],
      tech: ["Pyhton", "n8n", "Wordpress", "Canva", "HTML", "CSS"],
    },
  ],
  projects: [
    {
      name: "Chatbot automatizado para empresas de servicios",
      description:
        "Automatización de tareas comunicativas yrepetitivas para empresas de servicios, utilizando Python y API de OpenAI.",
      tags: ["Python", "OpenAI", "FastAPI"],
      links: {
        repo: "#",
        demo: "#",
      },
    },
    {
      name: "Web comparadora de precios con scrapper",
      description:
        "App web para comparar precios de productos de manera automatizada, utilizando Python",
      tags: ["Python", "Scrapy", "Selenium"],
      links: {
        repo: "#",
        demo: "#",
      },
    },
    {
      name: "App de fichaje para empresas",
      description:
        "Aplicacion Android para fichaje de empleados en empresas, utilizada para marcar y supervisar turnos",
      tags: ["Kotlin", "Android", "JSON", "SQLite"],
      links: {
        repo: "#",
        demo: "#",
      },
    },
  ],
  skills: {
    primary: ["Python", "Java", "Kotlin", "SQL", "PostgreSQL", "REST APIs", "Docker", "Docker Compose"],
    secondary: ["Git", "Linux", "CI/CD", "Testing", "AWS", "Xcode", "MongoDB", "MariaDB"],
  },
  education: [
    {
      title: "Desarrollo de Aplicaciones Multiplataforma",
      institution: "FP Euroformac",
      period: "2024 — 2026",
      details: "Enfoque en programación, bases de datos y desarrollo de aplicaciones web y moviles",
    },
    {
      title: "Python Avanzado",
      institution: "GitHub",
      period: "2023",
      details: "Buenas practicas, testing y despliegue",
    },
  ],
};

function qs(selector) {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`No se encontró el elemento: ${selector}`);
  return el;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeHtmlWithAccentDashes(str) {
  const safe = escapeHtml(str);
  return safe
    .replaceAll(" — ", ` <span class="dash">—</span> `)
    .replaceAll(" - ", ` <span class="dash">-</span> `);
}

function renderMeta(tags = []) {
  return tags.map((t) => `<span class="meta">${escapeHtml(t)}</span>`).join("");
}

function renderExperienceItem(item) {
  const highlights = (item.highlights || []).map((h) => `<li>${escapeHtml(h)}</li>`).join("");
  const tech = renderMeta(item.tech || []);
  return `
    <article class="card">
      <h3>${escapeHtml(item.title)} · ${escapeHtml(item.company)}</h3>
      <p>${escapeHtmlWithAccentDashes(item.period)} · ${escapeHtmlWithAccentDashes(item.location)}</p>
      <div class="metaRow">
        <div class="chips">${tech}</div>
      </div>
      <ul class="bullets" style="margin-top: 10px;">${highlights}</ul>
    </article>
  `;
}

function renderProjectCard(project) {
  const tags = renderMeta(project.tags || []);
  const repo = project.links?.repo && project.links.repo !== "#" ? project.links.repo : null;
  const demo = project.links?.demo && project.links.demo !== "#" ? project.links.demo : null;

  return `
    <article class="card">
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="metaRow">
        <div class="chips">${tags}</div>
        <div class="cardLinks">
          ${repo ? `<a class="cardLink" href="${escapeHtml(repo)}" target="_blank" rel="noreferrer noopener">Repo</a>` : ""}
          ${demo ? `<a class="cardLink" href="${escapeHtml(demo)}" target="_blank" rel="noreferrer noopener">Demo</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderEducationItem(item) {
  return `
    <article class="card">
      <h3>${escapeHtml(item.title)}</h3>
      <p><strong>${escapeHtml(item.institution)}</strong> · ${escapeHtmlWithAccentDashes(item.period)}</p>
      <p style="margin-top: 10px;">${escapeHtml(item.details)}</p>
    </article>
  `;
}

function mount() {
  qs("#year").textContent = String(new Date().getFullYear());

  // Links / contacto
  const email = portfolio.person.email;
  const contactEmailLink = qs("#contactEmailLink");
  contactEmailLink.href = `mailto:${email}`;

  const heroEmailLink = qs("#heroEmailLink");
  heroEmailLink.href = `mailto:${email}`;

  const githubLink = qs("#githubLink");
  githubLink.href = portfolio.person.links.github || "#";

  const linkedinLink = qs("#linkedinLink");
  linkedinLink.href = portfolio.person.links.linkedin || "#";

  const contactGithubLink = qs("#contactGithubLink");
  contactGithubLink.href = portfolio.person.links.github || "#";

  const contactLinkedinLink = qs("#contactLinkedinLink");
  contactLinkedinLink.href = portfolio.person.links.linkedin || "#";

  // Experiencia
  qs("#experienceList").innerHTML = portfolio.experience.map(renderExperienceItem).join("");

  // Proyectos
  qs("#projectsGrid").innerHTML = portfolio.projects.map(renderProjectCard).join("");

  // Skills
  qs("#skillsPrimary").innerHTML = portfolio.skills.primary.map((s) => `<span class="chip">${escapeHtml(s)}</span>`).join("");
  qs("#skillsSecondary").innerHTML = portfolio.skills.secondary
    .map((s) => `<span class="chip">${escapeHtml(s)}</span>`)
    .join("");

  // Formación
  qs("#educationList").innerHTML = portfolio.education.map(renderEducationItem).join("");

  // Nav móvil
  const navToggle = qs("#navToggle");
  const navMenu = qs("#navMenu");

  function setNavOpen(open) {
    navMenu.dataset.open = open ? "true" : "false";
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.dataset.open === "true";
    setNavOpen(!isOpen);
  });

  navMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches && target.matches("a.nav__link")) setNavOpen(false);
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!t) return;
    if (navMenu.contains(t) || navToggle.contains(t)) return;
    setNavOpen(false);
  });

  // Nav active section
  const links = Array.from(document.querySelectorAll("a.nav__link"));
  const sectionIds = links
    .map((l) => (l.getAttribute("href") || "").trim())
    .filter((href) => href.startsWith("#"))
    .map((href) => href.slice(1));

  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (!visible?.target?.id) return;
      const id = visible.target.id;
      links.forEach((l) => {
        const href = l.getAttribute("href");
        const active = href === `#${id}`;
        if (active) l.setAttribute("aria-current", "page");
        else l.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.3, 0.4, 0.5] }
  );

  sections.forEach((s) => observer.observe(s));

}

document.addEventListener("DOMContentLoaded", () => {
  try {
    mount();
  } catch (err) {
    // Fallback minimal: no rompe la página si falta algo
    console.error(err);
  }
});
