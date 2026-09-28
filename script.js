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
        eyebrow: "AI systems · Frugal ML · Research",
        title: "AI systems, from training loop to physical device",
        text:
          "I build efficient models, distributed systems, and research prototypes where machine learning meets real hardware.",
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
        titleEmphasis: "measure them",
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
        "Machine learning",
        "Distributed systems",
        "Signal processing",
        "PyTorch",
        "Model efficiency",
        "Computer vision",
        "Audio ML",
        "Python · C++",
        "Italian / English"
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
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const focusGrid = document.getElementById("focus-grid");
const highlightGrid = document.getElementById("highlight-grid");
const timeline = document.getElementById("timeline");
const motionTrack = document.getElementById("motion-track");
const experienceList = document.getElementById("experience-list");
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

function renderResearchPoint(point) {
  const separator = point.indexOf(": ");
  if (separator === -1) return `<li><div>${point}</div></li>`;

  const name = point.slice(0, separator);
  const detail = point.slice(separator + 2);
  return `<li><div><span class="point-name">${name}</span> <span>${detail}</span></div></li>`;
}

function renderOutcome(outcome) {
  const percent = outcome.value.trim().endsWith("%") ? parseFloat(outcome.value) : NaN;
  const meter = Number.isFinite(percent)
    ? `<span class="outcome-meter" aria-hidden="true"><i style="--value: ${Math.min(percent, 100) / 100}"></i></span>`
    : "";

  return `
    <div class="research-outcome">
      <strong>${outcome.value}</strong>
      <span>${outcome.label}</span>
      ${meter}
    </div>
  `;
}

function renderExperiences(language) {
  const activeViewMap = new Map(
    [...experienceList.querySelectorAll(".research")].map((section, index) => {
      const id = section.dataset.experienceId || portfolioCatalog.experiences[index]?.id;
      const openView = [...section.querySelectorAll("[data-console-view]")].find((view) => !view.hidden);
      return [id, openView?.dataset.consoleView || "overview"];
    })
  );
  const visibleIds = new Set(
    [...experienceList.querySelectorAll(".research.reveal-visible")].map(
      (section, index) => section.dataset.experienceId || portfolioCatalog.experiences[index]?.id
    )
  );

  experienceList.innerHTML = getLocalizedExperiences(language)
    .map((experience, index) => {
      const sectionId = index === 0 ? "experience" : `experience-${experience.id}`;
      const titleId = index === 0 ? "research-title" : `research-title-${experience.id}`;
      const sectionIndex = index === 0 ? "01" : `01.${index + 1}`;
      const activeView = activeViewMap.get(experience.id) || "overview";
      const revealVisible = visibleIds.has(experience.id) ? " reveal-visible" : "";

      return `
        <section id="${sectionId}" class="research reveal${revealVisible}" data-experience-id="${experience.id}" aria-labelledby="${titleId}">
          <header class="section-head">
            <span class="section-index">${sectionIndex}</span>
            <p class="section-tag">${experience.tag}</p>
          </header>

          <div class="research-grid">
            <div class="research-copy">
              <h2 id="${titleId}" class="section-title">${experience.title}</h2>
              <p class="section-text">${experience.text}</p>
              <ol class="research-points">
                ${experience.points.map(renderResearchPoint).join("")}
              </ol>
            </div>

            <aside class="research-instrument">
              ${renderResearchConsole(experience, activeView)}
              <div class="instrument-meter" aria-hidden="true">${"<i></i>".repeat(32)}</div>
            </aside>
          </div>

          <div class="research-outcomes" aria-label="${experience.outcomesLabel}">
            ${experience.outcomes.map(renderOutcome).join("")}
          </div>
        </section>
      `;
    })
    .join("");

  observeRevealNodes(experienceList);
}

function renderProject(item, index) {
  const number = String(index + 1).padStart(2, "0");
  const panelId = `project-panel-${item.id}`;
  const buttonId = `project-button-${item.id}`;
  const isOpen = item.featured;

  return `
    <article class="project${isOpen ? " is-open" : ""}" data-project-id="${item.id}">
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

function emphasizePhrase(node, phrase) {
  if (!node || !phrase) return;
  const text = node.textContent;
  const index = text.lastIndexOf(phrase);
  if (index === -1) return;

  const emphasis = document.createElement("em");
  emphasis.textContent = phrase;
  node.replaceChildren(text.slice(0, index), emphasis, text.slice(index + phrase.length));
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

  emphasizePhrase(document.getElementById("profile-title"), content.about.titleEmphasis);
  document.getElementById("projects-title").textContent = window.formatProjectHeading(language, projects.length);

  renderList(
    focusGrid,
    content.focusCards,
    (item, index) => `
      <article class="tool">
        <span class="tool-index">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </div>
      </article>
    `
  );

  renderList(highlightGrid, projects, renderProject);

  // Rendered oldest-first so the route reads Catania to Paris.
  const steps = [...content.timelineSteps].reverse();
  renderList(
    timeline,
    steps,
    (item, index) => {
      const isCurrent = index === steps.length - 1;
      return `
        <li class="route-stop${isCurrent ? " is-current" : ""}">
          <span class="route-year">${item.step}${isCurrent ? '<span class="route-now">Now</span>' : ""}</span>
          <span class="route-dot" aria-hidden="true"></span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </li>
      `;
    }
  );

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
    { threshold: 0.01, rootMargin: "0px 0px -8% 0px" }
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
        const trigger = currentKey ? consoleEl.querySelector(`[data-console-open="${currentKey}"]`) : null;
        (trigger || consoleEl.querySelector("[data-console-open]"))?.focus();
      }
    }
  });
}

function setupProjectLedger() {
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
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (!("IntersectionObserver" in window)) return;

  const links = new Map(
    [...document.querySelectorAll(".main-nav a")].map((link) => [link.getAttribute("href").slice(1), link])
  );
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link, id) => {
          if (id === entry.target.id) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) navObserver.observe(section);
  });
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

// Decorative, simulated power signal: idle draw with periodic inference bursts.
function setupPowerTrace() {
  const canvas = document.getElementById("power-trace");
  const readout = document.getElementById("power-value");
  if (!canvas || !canvas.getContext) return;

  const context = canvas.getContext("2d");
  const step = 3;
  let samples = [];
  let width = 0;
  let height = 0;
  let tick = 0;
  let frame = 0;
  let rafId = 0;
  let isVisible = true;

  function nextSample() {
    tick += 1;
    const phase = tick % 110;
    const burst = phase < 26 ? 0.5 + 0.18 * Math.sin(phase * 0.55) : phase < 32 ? 0.22 : 0;
    const idle = 0.16 + 0.03 * Math.sin(tick * 0.06);
    return Math.max(0.04, Math.min(0.96, idle + burst + (Math.random() - 0.5) * 0.07));
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

  function draw() {
    const top = height * 0.12;
    const usable = height * 0.58;
    const yFor = (value) => top + usable * (1 - value);

    context.clearRect(0, 0, width, height);

    context.strokeStyle = "rgba(235, 232, 225, 0.12)";
    context.setLineDash([2, 5]);
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, yFor(0.5));
    context.lineTo(width, yFor(0.5));
    context.stroke();
    context.setLineDash([]);

    context.beginPath();
    samples.forEach((value, index) => {
      const x = index * step;
      const y = yFor(value);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });

    const gradient = context.createLinearGradient(0, top, 0, height);
    gradient.addColorStop(0, "rgba(239, 99, 55, 0.32)");
    gradient.addColorStop(1, "rgba(239, 99, 55, 0)");
    context.save();
    context.lineTo((samples.length - 1) * step, height);
    context.lineTo(0, height);
    context.closePath();
    context.fillStyle = gradient;
    context.fill();
    context.restore();

    context.beginPath();
    samples.forEach((value, index) => {
      const x = index * step;
      const y = yFor(value);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.strokeStyle = "#ef6337";
    context.lineWidth = 1.5;
    context.stroke();

    const last = samples[samples.length - 1] ?? 0;
    const lastX = (samples.length - 1) * step;
    context.fillStyle = "#ebe8e1";
    context.beginPath();
    context.arc(Math.min(lastX, width - 3), yFor(last), 2.5, 0, Math.PI * 2);
    context.fill();
  }

  function loop() {
    frame += 1;
    if (frame % 2 === 0) {
      samples.push(nextSample());
      samples.shift();
      draw();
    }
    if (readout && frame % 12 === 0) {
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
      }
      showMoodBubble(moodBtn, message);
    }
  });
}

applyTranslations("en");
setupRevealAnimations();
setupResearchConsole();
setupProjectLedger();
setupHeader();
setupParisClock();
setupPowerTrace();
setupHeaderMood();
