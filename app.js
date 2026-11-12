(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const video = document.querySelector(".hero-video");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (video) {
    if (reduce) {
      video.removeAttribute("autoplay");
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }

  const hero = document.querySelector(".hero-copy");
  if (hero) {
    if (reduce) hero.classList.add("in");
    else requestAnimationFrame(() => hero.classList.add("in"));
  }

  const cardsEl = document.getElementById("project-cards");
  const filtersEl = document.getElementById("filters");
  const detailsEl = document.getElementById("project-details");
  if (!cardsEl || !filtersEl || !detailsEl) return;

  let projects = [];
  let active = "Alle";

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  const renderFilters = () => {
    const cats = ["Alle", ...new Set(projects.map((p) => p.category))];
    filtersEl.innerHTML = cats
      .map(
        (cat) =>
          `<button type="button" class="filter${cat === active ? " is-active" : ""}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`,
      )
      .join("");
  };

  const techOf = (p) => p.tech || {};

  const techTags = (p) => {
    const t = techOf(p);
    const tags = [
      t.language || p.lang,
      ...(t.frameworks || p.stack || []).slice(0, 4),
    ].filter(Boolean);
    const unique = [...new Set(tags)];
    return unique
      .map((tag) => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
      .join("");
  };

  const techPanel = (p) => {
    const t = techOf(p);
    if (!t.blurb && !t.language) {
      return `<p class="detail-stack"><span>Stack</span> ${(p.stack || [])
        .map((s) => escapeHtml(s))
        .join(" · ")}</p>`;
    }
    const row = (label, value) => {
      if (!value || (Array.isArray(value) && value.length === 0)) return "";
      const text = Array.isArray(value) ? value.join(" · ") : value;
      return `<div class="tech-row"><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(text)}</dd></div>`;
    };
    return `<div class="tech-panel">
      <h4>Technologie</h4>
      <p class="tech-blurb">${escapeHtml(t.blurb || "")}</p>
      <div class="tech-tags">${techTags(p)}</div>
      <dl class="tech-grid">
        ${row("Sprache", t.language || p.lang)}
        ${row("Runtime", t.runtime)}
        ${row("Plattform", t.platform)}
        ${row("Frameworks", t.frameworks)}
        ${row("Daten", t.data)}
        ${row("Integrationen", t.integrations)}
        ${row("Konzepte", t.concepts)}
      </dl>
    </div>`;
  };

  const renderCards = () => {
    const list =
      active === "Alle" ? projects : projects.filter((p) => p.category === active);
    cardsEl.innerHTML = list
      .map((p) => {
        const vis = p.visibility === "private" ? "Privat" : "Öffentlich";
        const t = techOf(p);
        return `<a class="card" href="#project-${escapeHtml(p.id)}">
          <div class="card-top">
            <strong>${escapeHtml(p.name)}</strong>
            <span class="badge ${p.visibility}">${vis}</span>
          </div>
          <p>${escapeHtml(p.summary)}</p>
          <div class="tech-tags">${techTags(p)}</div>
          <p class="card-tech">${escapeHtml(t.platform || t.runtime || p.lang)}</p>
          <div class="card-meta">
            <span>${escapeHtml(t.language || p.lang)}</span>
            <span>${escapeHtml(p.category)}</span>
          </div>
        </a>`;
      })
      .join("");
  };

  const renderDetails = () => {
    detailsEl.innerHTML = projects
      .map((p) => {
        const highlights = p.highlights
          .map((h) => `<li>${escapeHtml(h)}</li>`)
          .join("");
        const vis = p.visibility === "private" ? "privat" : "öffentlich";
        return `<article class="detail" id="project-${escapeHtml(p.id)}">
          <div class="detail-head">
            <h3>${escapeHtml(p.name)}</h3>
            <span class="badge ${p.visibility}">${vis}</span>
          </div>
          <p class="detail-summary">${escapeHtml(p.summary)}</p>
          ${techPanel(p)}
          <ul class="bullets">${highlights}</ul>
          <pre class="arch" tabindex="0">${escapeHtml(p.arch)}</pre>
          <p class="note"><a href="projects/${escapeHtml(p.id)}/README.md">Showcase-README</a></p>
        </article>`;
      })
      .join("");
  };

  filtersEl.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-cat]");
    if (!btn) return;
    active = btn.getAttribute("data-cat") || "Alle";
    renderFilters();
    renderCards();
  });

  fetch("projects.json")
    .then((res) => {
      if (!res.ok) throw new Error("projects.json fehlt");
      return res.json();
    })
    .then((data) => {
      projects = Array.isArray(data) ? data : [];
      renderFilters();
      renderCards();
      renderDetails();
    })
    .catch((err) => {
      cardsEl.innerHTML = `<p class="note">Projekte konnten nicht geladen werden: ${escapeHtml(err.message)}</p>`;
    });
})();
