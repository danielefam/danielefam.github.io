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

            ${renderResearchConsole(experience, activeView)}
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

  renderList(
    highlightGrid,
    projects,
    (item, index) => `
      <article class="highlight-card highlight-card-accent-${item.accent} ${item.featured ? "highlight-card-featured" : ""}">
        ${renderProjectAtmosphere(item.visual)}
        <div class="highlight-topline">
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="highlight-meta">${item.meta}</span>
        </div>
        <div class="highlight-body">
          <div class="highlight-copy">
            <div class="highlight-header">
              <h3>${item.title}</h3>
            </div>
            <p>${item.text}</p>
            <ul class="highlight-points">
              ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
          </div>
          <div class="project-metric" aria-label="${item.metric} ${item.metricLabel}">
            <strong>${item.metric}</strong>
            <span>${item.metricLabel}</span>
          </div>
        </div>
        <div class="highlight-links">
          ${item.links
        .map(
          (link) => `
                <a class="project-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}<span aria-hidden="true">&nearr;</span></a>
              `
        )
        .join("")}
        </div>
      </article>
    `
  );

  renderList(
    timeline,
    content.timelineSteps,
    (item) => `
      <article class="timeline-step">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <span>${item.step}</span>
      </article>
    `
  );

  motionTrack.innerHTML = [...content.motionWords, ...content.motionWords]
    .map((word) => `<span class="motion-pill">${word}</span>`)
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

applyTranslations("en");
setupRevealAnimations();
setupResearchConsole();
setupHeaderMood();