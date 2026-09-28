const siteContent = {
  translations: {
    en: {
      title: "Daniele Fam\u00e0",
      nav: {
        about: "About",
        focus: "Skills",
        experience: "Research",
        highlights: "Projects",
        contact: "Contact"
      },
      hero: {
        eyebrow: "AI systems · SWE · Research",
        title: "AI systems, from training loop to physical device",
        text:
          "I'm Daniele Fam\u00e0, an engineer working where machine learning meets software and hardware. I build efficient models, distributed systems, and research prototypes designed to scale.",
        primaryCta: "See my work",
        cvCta: "Download CV",
        secondaryCta: "Get in touch",
        proof1: "INT8 MNIST accuracy",
        proof2: "with honors",
        proof3: "smaller VSLNet",
        cardLabel: "Engineering profile",
        stat1Label: "Focus",
        stat1Value: "Efficient AI systems",
        stat2Label: "Currently",
        stat2Value: "T\u00e9l\u00e9com Paris",
        stat3Label: "Status",
        stat3Value: "Open to opportunities",
        cardNote: "Research depth, implementation discipline, and a bias toward measurable results"
      },
      about: {
        tag: "Profile",
        title: "Complex systems fascinate me, but the real magic begins when you manage to measure them",
        text1:
          "I care about the full AI engineering loop: understanding the problem, designing the model, making inference efficient, and shipping a clear, testable solution.",
        text2:
          "My work crosses multimodal learning, embedded inference, energy measurement, numerical methods, and distributed architectures. The common thread is making complex ideas concrete and measurable."
      },
      focus: {
        tag: "Skills",
        title: "The tools I use to build and ship"
      },
      highlights: {
        tag: "Projects",
        title: "Five systems, five different constraints",
        intro:
          "The projects span embedded machine learning, distributed workers, and egocentric video. Each project has a result you can inspect."
      },
      motionWords: [
        "Watts, not guesses",
        "Neural nets on a calculator",
        "Putting neural nets on a diet",
        "60% fewer joules",
        "Crash-proof by design",
        "64 KB is plenty",
        "Educated under Etna"
      ],
      timeline: {
        tag: "Education",
        title: "Academic path across Italy and France"
      },
      contact: {
        tag: "Contact",
        title: "Looking for the next hard system to build",
        text:
          "I'm currently open to AI Engineer, Software Engineer, and research-oriented opportunities. If you're building intelligent products or ambitious ML systems, I'd love to hear from you.",
        emailLabel: "Email",
        linkedinLabel: "LinkedIn",
        linkedinValue: "linkedin.com/in/daniele-fama",
        cvLabel: "CV",
        cvValue: "Download PDF resume",
        githubValue: "github.com/danielefam"
      },
      focusCards: [
        {
          title: "Programming",
          text: "Python, Java, C/C++, Matlab, PHP, and JavaScript across coursework, projects, and research prototypes."
        },
        {
          title: "Python ecosystem",
          text: "NumPy, Pandas, Matplotlib, scikit-learn, PyTorch, Keras, and TensorFlow for analysis, modeling, and experimentation."
        },
        {
          title: "Data and frameworks",
          text: "Hadoop, Spark, and Laravel, with exposure to distributed architectures for big data processing and backend-oriented thinking."
        },
        {
          title: "Working languages",
          text: "Italian native, English professional working proficiency, and French elementary proficiency."
        }
      ],
      timelineSteps: [
        {
          step: "2025-2027",
          title: "T\u00e9l\u00e9com Paris",
          text: "Master of Science in Engineering with coursework in applied algebra, distributed software systems, and data science."
        },
        {
          step: "2024-2025",
          title: "Politecnico di Torino",
          text: "Master's Degree in Data Science and Engineering, with top results in machine learning, distributed architectures for big data processing, and deep learning."
        },
        {
          step: "2021-2024",
          title: "Universit\u00e0 degli Studi di Catania",
          text: "Bachelor's Degree in Computer Engineering, 110/110 with honors, with a thesis on Tow-Thomas Butterworth filter design for audio-band applications."
        }
      ]
    }
  }
};

window.siteContent = siteContent;

const translations = siteContent.translations;
const portfolioCatalog = window.portfolioCatalog;

const focusGrid = document.getElementById("focus-grid");
const highlightGrid = document.getElementById("highlight-grid");
const timeline = document.getElementById("timeline");
const motionTrack = document.getElementById("motion-track");
const experienceList = document.getElementById("experience-list");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let revealObserver;

function renderList(container, items, template) {
  container.innerHTML = items.map(template).join("");
}

function getLocalizedProjects(language = "en") {
  return portfolioCatalog.projects.map((project) => ({
    ...project,
    ...project.content[language],
    links: [
      {
        href: project.href,
        label: project.content[language].linkLabel
      }
    ]
  }));
}

function getLocalizedExperiences(language = "en") {
  return portfolioCatalog.experiences.map((experience) => ({
    ...experience,
    ...experience.content[language]
  }));
}

function renderBotanicalAtmosphere() {
  const sprigFive = "<i><span></span></i>".repeat(5);
  const sprigFour = "<i><span></span></i>".repeat(4);

  return `
    <div class="research-botanical" aria-hidden="true">
      <span class="botanical-sprig botanical-sprig-a">${sprigFive}</span>
      <span class="botanical-sprig botanical-sprig-b">${sprigFour}</span>
      <span class="botanical-sprig botanical-sprig-c">${sprigFive}</span>
    </div>
  `;
}

function renderConsoleSteps(steps, activeStep, interactiveKeys = []) {
  return steps
    .map((step, index) => {
      const number = String(index + 1).padStart(2, "0");
      const isActive = index === activeStep;
      const workflowKey = interactiveKeys[index];

      if (workflowKey) {
        return `
          <li${isActive ? ' class="console-step-active"' : ""}>
            <span>${number}</span>
            <button class="console-step-button" type="button" data-console-open="${workflowKey}">
              <span>${step}</span><span aria-hidden="true">&rarr;</span>
            </button>
          </li>
        `;
      }

      return `<li${isActive ? ' class="console-step-active"' : ""}><span>${number}</span><strong>${step}</strong></li>`;
    })
    .join("");
}

function renderResearchConsole(experience, activeView = "overview") {
  const subWorkflows = experience.console.subWorkflows || {};
  const subWorkflowKeys = Object.keys(subWorkflows);

  const subViewsHtml = subWorkflowKeys
    .map((key) => {
      const workflow = subWorkflows[key];
      const isVisible = activeView === key;

      return `
        <div class="console-view" data-console-view="${key}"${isVisible ? "" : " hidden"}>
          <div class="console-header">
            <span>${workflow.label}</span>
            <button class="console-back" type="button" data-console-back>
              <span aria-hidden="true">&larr;</span> <span>${experience.console.backLabel}</span>
            </button>
          </div>
          <ol class="console-flow">
            ${renderConsoleSteps(workflow.steps, 3)}
          </ol>
          <div class="console-readout"><span>${experience.signalLabel}</span><strong>${experience.signalValue}</strong></div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="research-console" aria-label="${experience.consoleLabel}" aria-live="polite">
      <div class="console-view" data-console-view="overview"${activeView === "overview" ? "" : " hidden"}>
        <div class="console-header">
          <span>${experience.console.overviewLabel}</span>
          <span>${experience.device}</span>
        </div>
        <ol class="console-flow">
          ${renderConsoleSteps(experience.console.overviewSteps, experience.activeStep, subWorkflowKeys)}
        </ol>
        <div class="console-readout"><span>${experience.signalLabel}</span><strong>${experience.signalValue}</strong></div>
      </div>

      ${subViewsHtml}
    </div>
  `;
}

function renderPowerTrace(experience) {
  if (experience.device !== "INA226EVM") return "";

  return `
    <div class="power-trace" aria-hidden="true">
      <div class="power-readout">
        <span>P(t) &middot; ${experience.device} &middot; simulated</span>
        <strong><span data-power-value>3.10</span> W</strong>
      </div>
      <canvas data-power-trace></canvas>
    </div>
  `;
}

function renderExperiences(language) {
  const activeViewMap = new Map(
    [...experienceList.querySelectorAll(".research-section")].map((section, index) => {
      const id = section.dataset.experienceId || portfolioCatalog.experiences[index]?.id;
      const openView = [...section.querySelectorAll("[data-console-view]")].find((view) => !view.hidden);
      return [id, openView?.dataset.consoleView || "overview"];
    })
  );
  const visibleIds = new Set(
    [...experienceList.querySelectorAll(".research-section.reveal-visible")]
      .map((section, index) => section.dataset.experienceId || portfolioCatalog.experiences[index]?.id)
  );

  experienceList.innerHTML = getLocalizedExperiences(language)
    .map((experience, index) => {
      const sectionId = index === 0 ? "experience" : `experience-${experience.id}`;
      const titleId = index === 0 ? "research-title" : `research-title-${experience.id}`;
      const activeView = activeViewMap.get(experience.id) || "overview";
      const revealVisible = visibleIds.has(experience.id) ? " reveal-visible" : "";

      return `
        <section id="${sectionId}" class="research-section reveal${revealVisible}" data-experience-id="${experience.id}" aria-labelledby="${titleId}">
          ${renderBotanicalAtmosphere()}
          <div class="section-kicker-row">
            <p class="section-tag">${experience.tag}</p>
            <span class="research-state"><span aria-hidden="true"></span> ${experience.state}</span>
          </div>

          <div class="research-grid">
            <div class="research-copy">
              <h2 id="${titleId}" class="section-title">${experience.title}</h2>
              <p class="section-text">${experience.text}</p>
              <ul class="research-points">
                ${experience.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </div>

            <div class="research-instrument">
              ${renderResearchConsole(experience, activeView)}
              ${renderPowerTrace(experience)}
            </div>
          </div>

          <div class="research-outcomes" aria-label="${experience.outcomesLabel}">
            ${experience.outcomes
          .map(
            (outcome) => `
                  <div class="research-outcome">
                    <strong>${outcome.value}</strong>
                    <span>${outcome.label}</span>
                  </div>
                `
          )
          .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  observeRevealNodes(experienceList);
}

function renderProjectAtmosphere(visual) {
  if (visual === "calculator") {
    const keys = "<i></i>".repeat(9);
    return `
      <div class="project-atmosphere project-atmosphere-calculator" aria-hidden="true">
        <span class="mini-calculator mini-calculator-a"><span>${keys}</span></span>
        <span class="mini-calculator mini-calculator-b"><span>${keys}</span></span>
        <span class="mini-calculator mini-calculator-c"><span>${keys}</span></span>
        <span class="mini-calculator mini-calculator-d"><span>${keys}</span></span>
        <span class="mini-calculator mini-calculator-e"><span>${keys}</span></span>
        <span class="mini-calculator mini-calculator-f"><span>${keys}</span></span>
        <span class="mini-calculator mini-calculator-g"><span>${keys}</span></span>
      </div>
    `;
  }

  if (visual === "database") {
    const dbIcon = `<svg viewBox="0 0 48 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><path d="M4 8 v32 c0 4.4 9 8 20 8 s20 -3.6 20 -8 v-32" /><ellipse cx="24" cy="8" rx="20" ry="5" /><path d="M4 19 c0 4.4 9 8 20 8 s20 -3.6 20 -8" /><path d="M4 30 c0 4.4 9 8 20 8 s20 -3.6 20 -8" /></svg>`;
    return `
      <div class="project-atmosphere project-atmosphere-database" aria-hidden="true">
        <span class="database-mark database-mark-a">${dbIcon}</span>
        <span class="database-mark database-mark-b">${dbIcon}</span>
        <span class="database-mark database-mark-c">${dbIcon}</span>
        <span class="database-mark database-mark-d">${dbIcon}</span>
        <span class="database-mark database-mark-e">${dbIcon}</span>
        <span class="database-mark database-mark-f">${dbIcon}</span>
        <span class="database-mark database-mark-g">${dbIcon}</span>
      </div>
    `;
  }

  if (visual === "audio") {
    const samples = "<i></i>".repeat(11);
    return `
      <div class="project-atmosphere project-atmosphere-audio" aria-hidden="true">
        <span class="audio-trace audio-trace-a">${samples}</span>
        <span class="audio-trace audio-trace-b">${samples}</span>
        <span class="audio-trace audio-trace-c">${samples}</span>
        <span class="audio-trace audio-trace-d">${samples}</span>
        <span class="audio-trace audio-trace-e">${samples}</span>
        <span class="audio-trace audio-trace-f">${samples}</span>
        <span class="audio-trace audio-trace-g">${samples}</span>
      </div>
    `;
  }

  if (visual === "pov") {
    return `
      <div class="project-atmosphere project-atmosphere-pov" aria-hidden="true">
        <span class="pov-camera pov-camera-a"><i></i></span>
        <span class="pov-camera pov-camera-b"><i></i></span>
        <span class="pov-glasses pov-glasses-a"><i></i><i></i></span>
        <span class="pov-glasses pov-glasses-b"><i></i><i></i></span>
        <span class="pov-glasses pov-glasses-c"><i></i><i></i></span>
        <span class="pov-glasses pov-glasses-d"><i></i><i></i></span>
        <span class="pov-glasses pov-glasses-e"><i></i><i></i></span>
      </div>
    `;
  }

  if (visual === "locks") {
    return `
      <div class="project-atmosphere project-atmosphere-locks" aria-hidden="true">
        <span class="kv-node kv-node-a"></span>
        <span class="kv-node kv-node-b"></span>
        <span class="kv-node kv-node-c"></span>
        <span class="kv-node kv-node-d"></span>
        <span class="kv-node kv-node-e"></span>
        <span class="kv-route kv-route-a"></span>
        <span class="kv-route kv-route-b"></span>
        <span class="kv-route kv-route-c"></span>
        <span class="kv-route kv-route-d"></span>
      </div>
    `;
  }

  return "";
}

function renderProject(item, index) {
  const number = String(index + 1).padStart(2, "0");
  const panelId = `project-panel-${item.id}`;
  const buttonId = `project-button-${item.id}`;
  const isOpen = Boolean(item.featured);

  return `
    <article class="project project-accent-${item.accent}${isOpen ? " is-open" : ""}">
      <h3 class="project-heading">
        <button class="project-toggle" id="${buttonId}" type="button" aria-expanded="${isOpen}" aria-controls="${panelId}">
          <span class="project-index">${number}</span>
          <span class="project-metric"><strong>${item.metric}</strong><small>${item.metricLabel}</small></span>
          <span class="project-title">${item.title}</span>
          <span class="project-meta">${item.meta}</span>
          <span class="project-plus" aria-hidden="true"></span>
        </button>
      </h3>
      <div class="project-panel" id="${panelId}" role="region" aria-labelledby="${buttonId}"${isOpen ? "" : " inert"}>
        <div class="project-panel-inner">
          ${renderProjectAtmosphere(item.visual)}
          <div class="project-panel-body">
            <p>${item.text}</p>
            <ul class="project-points">
              ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            ${item.links
              .map(
                (link) =>
                  `<a class="project-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}<span aria-hidden="true">&nearr;</span></a>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </article>
  `;
}

function applyTranslations(language = "en") {
  const content = translations[language] || translations.en;
  const projects = getLocalizedProjects(language);

  document.documentElement.lang = language;
  document.title = content.title;
  renderExperiences(language);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const path = node.dataset.i18n.split(".");
    const value = path.reduce((current, key) => current[key], content);
    node.textContent = value;
  });

  document.getElementById("projects-title").textContent = window.formatProjectHeading(language, projects.length);

  renderList(
    focusGrid,
    content.focusCards,
    (item) => `
      <article class="focus-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
  );

  renderList(highlightGrid, projects, renderProject);

  // Rendered oldest-first so the route reads Catania to Paris.
  const steps = [...content.timelineSteps].reverse();
  renderList(timeline, steps, (item, index) => {
    const isCurrent = index === steps.length - 1;
    return `
      <li class="route-stop${isCurrent ? " is-current" : ""}">
        <span class="route-year">${item.step}</span>
        <span class="route-dot" aria-hidden="true"></span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </li>
    `;
  });

  motionTrack.innerHTML = [...content.motionWords, ...content.motionWords]
    .map((word) => `<span class="motion-word">${word}</span><span class="motion-sep">&#10035;</span>`)
    .join("");
}

function observeRevealNodes(root = document) {
  const nodes = [...root.querySelectorAll(".reveal:not(.reveal-visible)")];

  if (revealObserver === false) {
    nodes.forEach((node) => node.classList.add("reveal-visible"));
    return;
  }

  if (revealObserver) {
    nodes.forEach((node) => revealObserver.observe(node));
  }
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    revealObserver = false;
    observeRevealNodes();
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01 }
  );

  observeRevealNodes();
}

function setupResearchConsole() {
  experienceList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-console-open], [data-console-back]");
    if (!button) return;

    const consoleEl = button.closest(".research-console");
    if (!consoleEl) return;

    const targetKey = button.getAttribute("data-console-open");
    if (targetKey) {
      const targetView = consoleEl.querySelector(`[data-console-view="${targetKey}"]`);
      if (targetView) {
        consoleEl.querySelectorAll("[data-console-view]").forEach((v) => {
          v.hidden = true;
        });
        targetView.hidden = false;
        targetView.querySelector("[data-console-back]")?.focus();
      }
    } else if (button.hasAttribute("data-console-back")) {
      const currentView = button.closest("[data-console-view]");
      const currentKey = currentView?.dataset.consoleView;
      consoleEl.querySelectorAll("[data-console-view]").forEach((v) => {
        v.hidden = true;
      });
      const overview = consoleEl.querySelector('[data-console-view="overview"]');
      if (overview) {
        overview.hidden = false;
        const trigger = currentKey
          ? consoleEl.querySelector(`[data-console-open="${currentKey}"]`)
          : null;
        (trigger || consoleEl.querySelector("[data-console-open]"))?.focus();
      }
    }
  });
}

function setupProjectLedger() {
  let litProject = null;
  let clearLitTimer;

  const setLitProject = (project, clientX, clientY) => {
    if (litProject && litProject !== project) {
      litProject.classList.remove("is-lit");
    }
    litProject = project;
    if (!project) return;
    const rect = project.getBoundingClientRect();
    project.style.setProperty("--mx", `${clientX - rect.left}px`);
    project.style.setProperty("--my", `${clientY - rect.top}px`);
    project.classList.add("is-lit");
  };

  highlightGrid.addEventListener("click", (event) => {
    const toggle = event.target.closest(".project-toggle");
    if (!toggle) return;

    const project = toggle.closest(".project");
    const panel = document.getElementById(toggle.getAttribute("aria-controls"));
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";

    toggle.setAttribute("aria-expanded", String(willOpen));
    project.classList.toggle("is-open", willOpen);
    if (panel) panel.inert = !willOpen;
  });

  highlightGrid.addEventListener("pointermove", (event) => {
    const project = event.target.closest(".project");
    if (!project) return;
    const rect = project.getBoundingClientRect();
    project.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    project.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  const handleTouch = (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    clearTimeout(clearLitTimer);
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const project = target?.closest(".project");
    if (project && highlightGrid.contains(project)) {
      setLitProject(project, touch.clientX, touch.clientY);
    } else if (litProject) {
      litProject.classList.remove("is-lit");
      litProject = null;
    }
  };

  highlightGrid.addEventListener("touchstart", handleTouch, { passive: true });
  highlightGrid.addEventListener("touchmove", handleTouch, { passive: true });

  const endTouch = () => {
    clearTimeout(clearLitTimer);
    clearLitTimer = setTimeout(() => {
      if (litProject) {
        litProject.classList.remove("is-lit");
        litProject = null;
      }
    }, 600);
  };

  highlightGrid.addEventListener("touchend", endTouch, { passive: true });
  highlightGrid.addEventListener("touchcancel", endTouch, { passive: true });
}

function setupParisClock() {
  const nodes = document.querySelectorAll("[data-paris-time]");
  if (!nodes.length) return;

  const format = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Paris"
  });
  const tick = () => {
    const value = format.format(new Date());
    nodes.forEach((node) => {
      node.textContent = value;
    });
  };

  tick();
  setInterval(tick, 15000);
}

// A flashlight rests aimed at the email and follows the mouse or finger while over the contact section.
function setupContactTorch() {
  const section = document.querySelector(".contact-section");
  const email = section?.querySelector(".contact-email");
  const torch = section?.querySelector(".contact-torch");
  if (!section || !email) return;

  let touchRestTimer;

  const aim = (x, y) => {
    section.style.setProperty("--tx", `${x}px`);
    section.style.setProperty("--ty", `${y}px`);
    if (!torch) return;
    const box = section.getBoundingClientRect();
    const head = torch.getBoundingClientRect();
    const dx = x - (head.left - box.left);
    const dy = y - (head.top - box.top);
    section.style.setProperty("--torch-angle", `${Math.atan2(dy, dx)}rad`);
    section.style.setProperty("--beam-length", `${Math.hypot(dx, dy) + 60}px`);
  };
  const rest = () => {
    const box = section.getBoundingClientRect();
    const target = email.getBoundingClientRect();
    section.classList.remove("is-tracking");
    aim(target.left - box.left + target.width / 2, target.top - box.top + target.height / 2);
  };

  section.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    const box = section.getBoundingClientRect();
    section.classList.add("is-tracking");
    aim(event.clientX - box.left, event.clientY - box.top);
  });
  section.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "mouse") return;
    rest();
  });

  const handleTouch = (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    clearTimeout(touchRestTimer);
    const box = section.getBoundingClientRect();
    section.classList.add("is-tracking");
    aim(touch.clientX - box.left, touch.clientY - box.top);
  };

  const endTouch = () => {
    clearTimeout(touchRestTimer);
    touchRestTimer = setTimeout(rest, 900);
  };

  section.addEventListener("touchstart", handleTouch, { passive: true });
  section.addEventListener("touchmove", handleTouch, { passive: true });
  section.addEventListener("touchend", endTouch, { passive: true });
  section.addEventListener("touchcancel", endTouch, { passive: true });

  new ResizeObserver(rest).observe(section);
  document.fonts?.ready.then(rest);
  window.addEventListener("load", rest);
}

// Scrolls anchors so the section starts right below the sticky header, ignoring reveal transforms.
function setupAnchorScroll() {
  const header = document.querySelector(".site-header");

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;

    const id = link.getAttribute("href").slice(1);
    if (!id || id === "main-content") return;
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    target.classList.add("reveal-visible");

    let top = 0;
    if (id !== "top") {
      for (let node = target; node; node = node.offsetParent) top += node.offsetTop;
      const isSticky = getComputedStyle(header).position === "sticky";
      top -= (isSticky ? header.offsetHeight : 0) + 16;
    }

    window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  });
}

// Decorative, simulated power signal: idle draw with periodic inference bursts.
function setupPowerTrace() {
  const canvas = document.querySelector("[data-power-trace]");
  const readout = document.querySelector("[data-power-value]");
  if (!canvas || !canvas.getContext) return;

  const context = canvas.getContext("2d");
  const step = 2;
  let samples = [];
  let width = 0;
  let height = 0;
  let segment = null;
  let frame = 0;
  let rafId = 0;
  let isVisible = true;

  const random = (min, max) => min + Math.random() * (max - min);

  // Each shape maps progress t in [0, 1) to a stepped hardware load plateau on top of the idle draw.
  const shapes = [
    (level) => (t) => (t < 0.08 || t > 0.92 ? level * 0.65 : level),
    (level) => (t) => (t < 0.18 ? level * 1.14 : level),
    (level) => (t) => (t < 0.64 ? level : level * 0.58),
    (level) => (t) => (t < 0.28 ? level * 0.62 : level),
    (level) => (t) => (t > 0.42 && t < 0.56 ? level * 0.24 : level),
    (level) => (t) => (t < 0.25 ? level * 0.74 : t < 0.76 ? level : level * 0.66)
  ];

  function nextSegment() {
    const isIdle = !segment || !segment.isIdle || Math.random() < 0.4;
    if (isIdle) return { isIdle: true, length: Math.round(random(18, 46)), at: 0, level: () => 0 };
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    return { isIdle: false, length: Math.round(random(8, 20)), at: 0, level: shape(random(0.38, 0.72)) };
  }

  function nextSample() {
    if (!segment || segment.at >= segment.length) segment = nextSegment();
    const burst = segment.level(segment.at / segment.length);
    segment.at += 1;
    const idle = 0.14;
    const baseNoise = (Math.random() - 0.5) * 0.06 + (Math.random() - 0.5) * 0.04;
    const loadNoise = burst > 0 ? (Math.random() - 0.5) * 0.08 : 0;
    const spikeNoise = Math.random() < 0.15 ? (Math.random() - 0.5) * 0.06 : 0;
    return Math.max(0.04, Math.min(0.96, idle + burst + baseNoise + loadNoise + spikeNoise));
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.ceil(width / step) + 2;
    while (samples.length < count) samples.push(nextSample());
    samples = samples.slice(-count);
    draw();
  }

  function tracePath() {
    context.beginPath();
    samples.forEach((value, index) => {
      const x = index * step;
      const y = 6 + (height - 12) * (1 - value);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    context.strokeStyle = "rgba(17, 19, 15, 0.2)";
    context.setLineDash([2, 5]);
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);
    context.stroke();
    context.setLineDash([]);

    tracePath();
    const gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(49, 92, 255, 0.24)");
    gradient.addColorStop(1, "rgba(49, 92, 255, 0)");
    context.lineTo((samples.length - 1) * step, height);
    context.lineTo(0, height);
    context.closePath();
    context.fillStyle = gradient;
    context.fill();

    tracePath();
    context.strokeStyle = "#315cff";
    context.lineWidth = 1.5;
    context.stroke();
  }

  function loop() {
    frame += 1;
    if (frame % 5 === 0) {
      samples.push(nextSample());
      samples.shift();
      draw();
    }
    if (readout && frame % 20 === 0) {
      const latest = samples[samples.length - 1] ?? 0;
      readout.textContent = (2.4 + latest * 4.6).toFixed(2);
    }
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    cancelAnimationFrame(rafId);
    if (isVisible && !document.hidden && !prefersReducedMotion.matches) {
      rafId = requestAnimationFrame(loop);
    }
  }

  resize();
  start();

  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", start);
  prefersReducedMotion.addEventListener?.("change", start);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) start();
      else cancelAnimationFrame(rafId);
    }).observe(canvas);
  }
}

function triggerMoodExplosion(button) {
  const container = document.createElement("div");
  container.className = "mood-explosion";
  container.setAttribute("aria-hidden", "true");
  button.appendChild(container);

  const shockwave = document.createElement("span");
  shockwave.className = "mood-shockwave";
  container.appendChild(shockwave);

  const shockwave2 = document.createElement("span");
  shockwave2.className = "mood-shockwave mood-shockwave-secondary";
  container.appendChild(shockwave2);

  const colors = ["var(--orange)", "var(--lime)", "var(--blue)", "var(--ink)", "#ffffff"];
  const chars = ["+", "*", "✦", "×", "#", "•"];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement("span");
    p.className = "mood-particle";

    const baseAngle = (i / particleCount) * 2 * Math.PI;
    const angle = baseAngle + (Math.random() - 0.5) * 0.45;
    const distance = 44 + Math.random() * 72;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance + 16;
    const rot = (Math.random() - 0.5) * 640;
    const duration = 800 + Math.random() * 400;
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.setProperty("--dx", `${dx.toFixed(1)}px`);
    p.style.setProperty("--dy", `${dy.toFixed(1)}px`);
    p.style.setProperty("--rot", `${rot.toFixed(0)}deg`);
    p.style.setProperty("--duration", `${duration.toFixed(0)}ms`);

    if (Math.random() > 0.6) {
      p.textContent = chars[Math.floor(Math.random() * chars.length)];
      p.style.color = color;
      p.style.fontFamily = "var(--mono)";
      p.style.fontSize = `${(10 + Math.random() * 6).toFixed(0)}px`;
      p.style.fontWeight = "700";
    } else {
      const size = 4 + Math.random() * 4.5;
      const isSquare = Math.random() > 0.35;
      p.style.width = `${size.toFixed(1)}px`;
      p.style.height = isSquare ? `${size.toFixed(1)}px` : `${(size * 1.7).toFixed(1)}px`;
      p.style.backgroundColor = color;
      p.style.borderRadius = Math.random() > 0.7 ? "50%" : "1px";
      if (color === "var(--lime)" || color === "#ffffff") {
        p.style.boxShadow = "0 0 3px rgba(17, 19, 15, 0.35)";
      }
    }

    container.appendChild(p);
  }

  setTimeout(() => {
    container.remove();
  }, 1250);
}

let moodClickCount = 0;
let moodClickResetTimer;
let moodBubbleTimer;
let moodBubbleLeaveTimer;
let isHoveringMood = false;

function dismissMoodBubble() {
  const bubble = document.querySelector(".header-mood .mood-bubble");
  if (!bubble || bubble.classList.contains("is-leaving")) return;

  clearTimeout(moodBubbleTimer);
  clearTimeout(moodBubbleLeaveTimer);

  bubble.classList.add("is-leaving");
  moodBubbleLeaveTimer = setTimeout(() => {
    bubble.remove();
  }, 270);
}

function showMoodBubble(button, text) {
  let bubble = button.querySelector(".mood-bubble");
  if (!bubble) {
    bubble = document.createElement("div");
    bubble.className = "mood-bubble";
    bubble.setAttribute("role", "status");
    button.appendChild(bubble);
  } else {
    bubble.classList.remove("is-leaving");
    bubble.classList.remove("mood-bubble-bounce");
    void bubble.offsetWidth;
    bubble.classList.add("mood-bubble-bounce");
  }

  bubble.textContent = text;

  clearTimeout(moodBubbleTimer);
  clearTimeout(moodBubbleLeaveTimer);

  const timeout = isHoveringMood ? 4000 : 1500;
  moodBubbleTimer = setTimeout(() => {
    dismissMoodBubble();
  }, timeout);
}

function setupHeaderMood() {
  const moodBtn = document.querySelector(".header-mood");
  if (!moodBtn) return;

  const eyes = moodBtn.querySelector(".mood-eyes");
  let resetFaceTimer;

  moodBtn.addEventListener("mouseenter", () => {
    isHoveringMood = true;
    clearTimeout(moodBubbleTimer);
  });

  moodBtn.addEventListener("mouseleave", () => {
    isHoveringMood = false;
    moodClickCount = 0;
    clearTimeout(moodClickResetTimer);

    const bubble = moodBtn.querySelector(".mood-bubble");
    if (bubble && !bubble.classList.contains("is-leaving")) {
      clearTimeout(moodBubbleTimer);
      moodBubbleTimer = setTimeout(() => {
        dismissMoodBubble();
      }, 200);
    }
  });

  document.addEventListener("pointerdown", (e) => {
    if (!moodBtn.contains(e.target)) {
      moodClickCount = 0;
      dismissMoodBubble();
    }
  });

  moodBtn.addEventListener("click", () => {
    triggerMoodExplosion(moodBtn);

    moodBtn.classList.remove("is-exploding");
    void moodBtn.offsetWidth;
    moodBtn.classList.add("is-exploding");

    if (eyes) eyes.textContent = ">";
    moodBtn.classList.add("is-tongue");

    clearTimeout(resetFaceTimer);
    resetFaceTimer = setTimeout(() => {
      if (eyes) eyes.textContent = ":";
      moodBtn.classList.remove("is-tongue");
    }, 1200);

    moodClickCount++;
    clearTimeout(moodClickResetTimer);
    moodClickResetTimer = setTimeout(() => {
      moodClickCount = 0;
    }, 8000);

    if (moodClickCount >= 2) {
      let message = "stop playing... please hire me 🙏";
      if (moodClickCount >= 12) {
        message = "still here? my inbox is waiting! 📩";
      } else if (moodClickCount >= 8) {
        message = "okay now you're just enjoying the explosions 💥";
      } else if (moodClickCount >= 5) {
        message = "seriously, my email is right next to me ↗";
      } else if (moodClickCount >= 2) {
        message = "stop playing... please hire me 🙏";
      }
      showMoodBubble(moodBtn, message);
    }
  });
}

function triggerEtnaEruption(volcano, isBig = false, customDropCount = null) {
  if (prefersReducedMotion.matches) return;

  const container = document.createElement("div");
  container.className = "etna-eruption";
  container.setAttribute("aria-hidden", "true");
  volcano.appendChild(container);

  const flash = document.createElement("span");
  flash.className = isBig ? "etna-crater-flash is-big" : "etna-crater-flash";
  container.appendChild(flash);

  if (isBig) {
    const shockwave = document.createElement("span");
    shockwave.className = "etna-shockwave";
    container.appendChild(shockwave);

    const shockwave2 = document.createElement("span");
    shockwave2.className = "etna-shockwave etna-shockwave-secondary";
    container.appendChild(shockwave2);

    const shockwave3 = document.createElement("span");
    shockwave3.className = "etna-shockwave etna-shockwave-tertiary";
    container.appendChild(shockwave3);
  }

  const magmaColors = ["#ffffff", "#fff6b8", "#ffb703", "#ff7b00", "#ff4f1f", "#d9260f", "#11130f"];
  const emberChars = ["•", "✦", "*", "▲"];
  const dropCount = customDropCount ?? (isBig ? 38 : 8);

  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement("span");
    drop.className = "etna-magma-drop";

    const startX = (Math.random() - 0.5) * 6;
    const startY = isBig ? -(10 + Math.random() * 10) : 0;
    let dx;
    let peakY;
    let landY;
    let duration;

    if (isBig) {
      const baseAngle = (i / dropCount) * 2 * Math.PI;
      const angle = baseAngle + (Math.random() - 0.5) * 0.38;
      const distance = 40 + Math.random() * 78;
      dx = Math.cos(angle) * distance;
      peakY = Math.sin(angle) * distance - (20 + Math.random() * 24);
      landY = Math.sin(angle) * distance + (16 + Math.random() * 22);
      duration = 1150 + Math.random() * 550;
    } else {
      const spread = dropCount > 1 ? (i / (dropCount - 1) - 0.5) * 2 : 0;
      dx = spread * (5 + Math.random() * 8) + (Math.random() - 0.5) * 3;
      peakY = -(8 + Math.random() * 12);
      landY = 4 + Math.random() * 7;
      duration = 820 + Math.random() * 350;
    }

    const rot = (Math.random() - 0.5) * 520;
    const isAsh = i % 7 === 0;
    const color = isAsh ? "#11130f" : magmaColors[Math.floor(Math.random() * (magmaColors.length - 1))];

    drop.style.setProperty("--start-x", `${startX.toFixed(1)}px`);
    drop.style.setProperty("--start-y", `${startY.toFixed(1)}px`);
    drop.style.setProperty("--dx", `${dx.toFixed(1)}px`);
    drop.style.setProperty("--peak-y", `${peakY.toFixed(1)}px`);
    drop.style.setProperty("--land-y", `${landY.toFixed(1)}px`);
    drop.style.setProperty("--rot", `${rot.toFixed(0)}deg`);
    drop.style.setProperty("--duration", `${duration.toFixed(0)}ms`);

    if (isBig && Math.random() > 0.68) {
      drop.textContent = emberChars[Math.floor(Math.random() * emberChars.length)];
      drop.style.color = color;
      drop.style.fontFamily = "var(--mono)";
      drop.style.fontSize = `${(10 + Math.random() * 6).toFixed(0)}px`;
      drop.style.fontWeight = "700";
    } else {
      const size = isBig ? 4.5 + Math.random() * 4.5 : 2.5 + Math.random() * 2;
      drop.style.width = `${size.toFixed(1)}px`;
      drop.style.height = `${(size * (0.8 + Math.random() * 0.7)).toFixed(1)}px`;
      drop.style.backgroundColor = color;
      drop.style.borderRadius = isAsh ? "1px" : "50% 50% 45% 20%";
      if (!isAsh) {
        drop.style.boxShadow = "0 0 6px rgba(255, 115, 0, 0.9)";
      }
    }

    container.appendChild(drop);
  }

  setTimeout(() => {
    container.remove();
  }, 1800);
}

function setupEtnaEruption() {
  const brand = document.querySelector(".brand");
  const volcano = brand?.querySelector(".brand-volcano");
  if (!brand || !volcano) return;

  let chargeTimer;
  let preSparkTimer;
  let explodeResetTimer;
  let activeColumnEl = null;

  const clickExplode = () => {
    clearTimeout(chargeTimer);
    clearTimeout(preSparkTimer);
    clearTimeout(explodeResetTimer);
    if (activeColumnEl) {
      activeColumnEl.remove();
      activeColumnEl = null;
    }

    brand.classList.remove("is-rumbling", "is-charging", "is-exploding");
    void volcano.offsetWidth;
    brand.classList.add("is-charging");

    if (!prefersReducedMotion.matches) {
      const colWrap = document.createElement("div");
      colWrap.className = "etna-eruption";
      colWrap.setAttribute("aria-hidden", "true");
      const column = document.createElement("span");
      column.className = "etna-lava-column";
      colWrap.appendChild(column);
      volcano.appendChild(colWrap);
      activeColumnEl = colWrap;
    }

    preSparkTimer = setTimeout(() => {
      triggerEtnaEruption(volcano, false, 8);
    }, 650);

    chargeTimer = setTimeout(() => {
      if (activeColumnEl) {
        activeColumnEl.remove();
        activeColumnEl = null;
      }
      brand.classList.remove("is-charging");
      void volcano.offsetWidth;
      brand.classList.add("is-exploding");
      triggerEtnaEruption(volcano, true);

      explodeResetTimer = setTimeout(() => {
        brand.classList.remove("is-exploding");
      }, 950);
    }, 1350);
  };

  brand.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse") return;
    if (!brand.classList.contains("is-charging") && !brand.classList.contains("is-exploding")) {
      brand.classList.add("is-rumbling");
    }
  });

  brand.addEventListener("pointerleave", () => {
    brand.classList.remove("is-rumbling");
  });

  brand.addEventListener("pointercancel", () => {
    brand.classList.remove("is-rumbling");
  });

  brand.addEventListener("click", clickExplode);
}

applyTranslations("en");
setupRevealAnimations();
setupResearchConsole();
setupProjectLedger();
setupParisClock();
setupContactTorch();
setupAnchorScroll();
setupPowerTrace();
setupHeaderMood();
setupEtnaEruption();