const translations = {
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
      eyebrow: "AI systems · Efficient ML · Research",
      title: "AI systems, from training loop to physical device.",
      text:
        "I'm Daniele Fam\u00e0, an engineer working where machine learning meets software and hardware. I build efficient models, distributed systems, and research prototypes that hold up beyond the notebook.",
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
      cardNote: "Research depth, implementation discipline, and a bias toward measurable results."
    },
    about: {
      tag: "Profile",
      title: "I like difficult systems with observable behavior.",
      text1:
        "I care about the full AI engineering loop: understanding the problem, designing the model, making inference efficient, and shipping a clear, testable solution.",
      text2:
        "My work crosses multimodal learning, embedded inference, energy measurement, numerical methods, and distributed architectures. The common thread is making complex ideas concrete and measurable."
    },
    experience: {
      tag: "Current research · 2026",
      title: "Neural architecture search, guided by real energy.",
      text:
        "At T\u00e9l\u00e9com Paris, I am building BANERA: a hardware-aware neural architecture search framework that uses real energy measurements from edge devices to guide model selection and regularization. Its measurement platform benchmarks neural-network workloads on physical hardware, producing the energy signal that BANERA feeds back into the search process.",
      point1: "Hardware-aware architecture search guided by measured energy",
      point2: "Remote neural-network benchmarks on physical edge devices",
      point3: "Automated warm-up, calibration, and measured execution",
      point4: "Energy traces and metadata fed back into the search process",
      result1Value: "Physical traces",
      result1Label: "energy measured on the device, not estimated from FLOPs",
      result2Value: "Controlled runs",
      result2Label: "warm-up, calibration, and capture separated automatically",
      result3Value: "Paired evidence",
      result3Label: "raw traces and metadata stored for each experiment",
      overviewLabel: "Architecture search loop",
      deviceLabel: "Measurement loop",
      consoleStatus: "AUTOMATED",
      consoleBack: "Back",
      overview1: "Search",
      overview2: "Deploy",
      overview3: "Measure",
      overview4: "Regularize",
      device1: "Run",
      device2: "Calibrate",
      device3: "Capture",
      device4: "Analyze"
    },
    focus: {
      tag: "Skills",
      title: "The tools I use to build and ship."
    },
    highlights: {
      tag: "Projects",
      title: "Five systems. Five different constraints.",
      intro:
        "The work ranges from an 18-year-old calculator to distributed workers and egocentric video. Each project has a result you can inspect."
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
      title: "Academic path across Italy and France."
    },
    contact: {
      tag: "Contact",
      title: "Looking for the next hard system to build.",
      text:
        "I'm currently open to AI Engineer, Machine Learning Engineer, and research-oriented opportunities. If you're building intelligent products or ambitious ML systems, I'd love to hear from you.",
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
    highlightCards: [
      {
        title: "Handwritten Digit Recognition on a Casio",
        visual: "calculator",
        text: "A native fixed-point neural network for handwritten digit recognition on the Casio fx-9860GIII, built from NumPy training to portable C inference.",
        meta: "Embedded ML · C / Python · 2026",
        metric: "95.47%",
        metricLabel: "INT8 MNIST accuracy",
        bullets: [
          "Quantized a 256-32-10 MLP to INT8 with a 0.06 percentage-point accuracy loss.",
          "Validated exact NumPy/C parity across 1,000 golden vectors.",
          "Designed inference without floating point, dynamic allocation, or a Python runtime."
        ],
        links: [
          {
            label: "View repository",
            href: "https://github.com/danielefam/enhance-casio-with-ai"
          }
        ]
      },
      {
        title: "Distributed MapReduce on Lab Machines",
        visual: "database",
        text: "A fault-aware MapReduce framework in Go that deploys remote workers, processes Common Crawl data, and runs pluggable analytical jobs without root access or containers.",
        meta: "Distributed systems · Go · 2026",
        metric: "64 nodes",
        metricLabel: "measured Common Crawl benchmark",
        bullets: [
          "Built the complete load, map, shuffle, reduce, and collect pipeline over HTTP and SSH.",
          "Added cold-spare worker replacement, health monitoring, and epoch-based recovery.",
          "Validated four jobs with 89 Go tests and benchmarked a fixed Common Crawl workload up to 64 nodes."
        ],
        links: [
          {
            label: "View repository",
            href: "https://github.com/danielefam/slr_map_reduce"
          }
        ]
      },
      {
        title: "ARDA VSLNet: Efficient Video-Language Localization",
        visual: "pov",
        text: "Enhanced VSLNet with FiLM conditioning and knowledge distillation for natural-language temporal localization in Ego4D videos.",
        meta: "Multimodal ML · PyTorch · 2025",
        metric: "88.47%",
        metricLabel: "model size reduction",
        bullets: [
          "Outperformed a similarly sized baseline by 19.73% after distillation.",
          "Used block-wise distillation to reduce parameters by 47.62% and GFLOPs by 80.6%.",
          "Connected language conditioning, temporal localization, and model efficiency in one pipeline."
        ],
        links: [
          {
            label: "View repository",
            href: "https://github.com/AndreaLolli2912/ARDA-VSLNet-FiLM-Enhanced-Knowledge-Distillation-for-Efficient-NLQ-Localization-in-Ego4D-Videos"
          }
        ]
      },
      {
        title: "Fault-Tolerant Key-Value Store",
        visual: "locks",
        text: "A multi-actor distributed key-value store implementing a multi-writer, multi-reader atomic register with Akka.",
        meta: "Distributed systems · Java / Akka · 2025",
        metric: "MWMR",
        metricLabel: "atomic register",
        bullets: [
          "Built around actors and message passing instead of shared-state locking.",
          "Tested behavior across fault-tolerance and performance scenarios.",
          "Added automated history checking to verify linearizability."
        ],
        links: [
          {
            label: "View repository",
            href: "https://github.com/marcutudor79/robust-key-value-store"
          }
        ]
      },
      {
        title: "Speech-Based Age Estimation",
        visual: "audio",
        text: "An end-to-end regression pipeline combining acoustic feature extraction, tabular preprocessing, and tuned ensemble models.",
        meta: "Audio ML · Python · 2025",
        metric: "1st",
        metricLabel: "class public leaderboard",
        bullets: [
          "Extracted time-frequency, Mel-spectrogram, and statistical speech features.",
          "Compared CatBoost, Random Forest, dimensionality reduction, and tuned preprocessing strategies.",
          "Built the full path from raw audio to evaluated regression outputs."
        ],
        links: [
          {
            label: "View repository",
            href: "https://github.com/danielefam/speech-based-age-estimation"
          }
        ]
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
  },
  it: {
    title: "Daniele Fam\u00e0",
    nav: {
      about: "Chi sono",
      focus: "Strumenti",
      experience: "Ricerca",
      highlights: "Progetti",
      contact: "Contatti"
    },
    hero: {
      eyebrow: "Sistemi AI · ML efficiente · Ricerca applicata",
      title: "Dall'addestramento al dispositivo: sistemi AI che funzionano davvero.",
      text:
        "Sono Daniele Fam\u00e0. Progetto sistemi all'incontro tra machine learning, software e hardware: modelli efficienti, architetture distribuite e prototipi di ricerca pensati per uscire dal notebook.",
      primaryCta: "Guarda i progetti",
      cvCta: "Scarica il CV",
      secondaryCta: "Contattami",
      proof1: "accuratezza MNIST INT8",
      proof2: "e lode",
      proof3: "VSLNet pi\u00f9 piccolo",
      cardLabel: "Profilo tecnico",
      stat1Label: "Mi occupo di",
      stat1Value: "Sistemi AI efficienti",
      stat2Label: "Attualmente",
      stat2Value: "T\u00e9l\u00e9com Paris",
      stat3Label: "Disponibilit\u00e0",
      stat3Value: "Aperto a nuove opportunit\u00e0",
      cardNote: "Ricerca solida, implementazione rigorosa, risultati misurabili."
    },
    about: {
      tag: "Profilo",
      title: "Mi interessano i sistemi complessi, quando il loro comportamento si pu\u00f2 misurare.",
      text1:
        "Seguo l'intero percorso di progettazione di un sistema AI: dal problema al modello, dall'efficienza in inferenza a una soluzione chiara, testabile e pronta all'uso.",
      text2:
        "Lavoro tra apprendimento multimodale, inferenza su dispositivi embedded, misure energetiche, metodi numerici e sistemi distribuiti. Il filo conduttore \u00e8 sempre lo stesso: trasformare idee complesse in sistemi concreti e misurabili."
    },
    experience: {
      tag: "Ricerca attuale · 2026",
      title: "Ricerca di architetture neurali, guidata dall'energia reale.",
      text:
        "Alla T\u00e9l\u00e9com Paris sto sviluppando BANERA, un framework per la ricerca di architetture neurali consapevole dell'hardware. Usa misure energetiche reali raccolte su dispositivi edge per guidare la selezione dei modelli e la regolarizzazione. La sua piattaforma di misura esegue benchmark di carichi di lavoro neurali su hardware fisico e riporta il segnale energetico nel processo di ricerca.",
      point1: "Ricerca di architetture neurali guidata da misure energetiche reali",
      point2: "Benchmark da remoto di modelli neurali su dispositivi edge fisici",
      point3: "Warm-up, calibrazione ed esecuzione misurata gestiti in automatico",
      point4: "Tracce energetiche e metadati riportati nel processo di ricerca",
      result1Value: "Misure reali",
      result1Label: "energia rilevata sul dispositivo, non stimata dai FLOPs",
      result2Value: "Esperimenti controllati",
      result2Label: "warm-up, calibrazione e acquisizione separati in automatico",
      result3Value: "Dati completi",
      result3Label: "tracce grezze e metadati archiviati per ogni esperimento",
      overviewLabel: "Ciclo di ricerca dell'architettura",
      deviceLabel: "Ciclo di misura",
      consoleStatus: "AUTOMATIZZATO",
      consoleBack: "Indietro",
      overview1: "Ricerca",
      overview2: "Esecuzione",
      overview3: "Misura",
      overview4: "Ottimizzazione",
      device1: "Esegui",
      device2: "Calibra",
      device3: "Acquisisci",
      device4: "Analizza"
    },
    focus: {
      tag: "Strumenti",
      title: "Le tecnologie con cui trasformo le idee in progetti funzionanti."
    },
    highlights: {
      tag: "Progetti",
      title: "Cinque progetti. Cinque problemi concreti.",
      intro:
        "Da una calcolatrice di 18 anni fa ai nodi distribuiti, fino ai video egocentrici: ogni progetto affronta un vincolo preciso e porta a un risultato verificabile."
    },
    motionWords: [
      "Machine learning",
      "Sistemi distribuiti",
      "Elaborazione del segnale",
      "PyTorch",
      "Modelli efficienti",
      "Visione artificiale",
      "Audio ML",
      "Python · C++",
      "Italiano / Inglese"
    ],
    timeline: {
      tag: "Formazione",
      title: "Un percorso di formazione tra Italia e Francia."
    },
    contact: {
      tag: "Contatti",
      title: "Cerco la prossima sfida tecnica su cui lasciare il segno.",
      text:
        "Valuto opportunit\u00e0 come AI Engineer, Machine Learning Engineer e in contesti di ricerca applicata. Se stai costruendo prodotti intelligenti o sistemi ML ambiziosi, parliamone.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      linkedinValue: "linkedin.com/in/daniele-fama",
      cvLabel: "CV",
      cvValue: "Curriculum in PDF",
      githubValue: "github.com/danielefam"
    },
    focusCards: [
      {
        title: "Linguaggi",
        text: "Python, Java, C/C++, Matlab, PHP e JavaScript: dagli esami ai prototipi di ricerca, fino ai progetti completi."
      },
      {
        title: "Strumenti Python",
        text: "NumPy, Pandas, Matplotlib, scikit-learn, PyTorch, Keras e TensorFlow per analisi, modellazione e sperimentazione."
      },
      {
        title: "Dati e backend",
        text: "Hadoop, Spark e Laravel, con esperienza nell'elaborazione distribuita di grandi volumi di dati e nello sviluppo backend."
      },
      {
        title: "Lingue",
        text: "Italiano madrelingua, inglese professionale e francese di base."
      }
    ],
    highlightCards: [
      {
        title: "Riconoscimento di cifre su una Casio",
        visual: "calculator",
        text: "Una rete neurale fixed-point per riconoscere cifre scritte a mano su Casio fx-9860GIII: dall'addestramento in NumPy all'inferenza in C portabile.",
        meta: "ML embedded · C / Python · 2026",
        metric: "95.47%",
        metricLabel: "accuratezza INT8 su MNIST",
        bullets: [
          "Una MLP 256-32-10 quantizzata in INT8, con appena 0,06 punti percentuali di accuratezza in meno.",
          "Parit\u00e0 esatta tra NumPy e C verificata su 1.000 vettori di riferimento.",
          "Inferenza senza floating-point, allocazioni dinamiche o runtime Python."
        ],
        links: [
          {
            label: "Apri il repository",
            href: "https://github.com/danielefam/enhance-casio-with-ai"
          }
        ]
      },
      {
        title: "MapReduce distribuito su macchine di laboratorio",
        visual: "database",
        text: "Un framework MapReduce fault-aware in Go: coordina worker remoti, elabora dati Common Crawl e supporta job analitici estendibili, senza privilegi root n\u00e9 container.",
        meta: "Sistemi distribuiti · Go · 2026",
        metric: "64 nodi",
        metricLabel: "benchmark su Common Crawl",
        bullets: [
          "Pipeline completa di load, map, shuffle, reduce e collect, orchestrata via HTTP e SSH.",
          "Sostituzione automatica dei worker con cold spare, health monitoring e recovery basato su epoch.",
          "Quattro job validati da 89 test Go e un benchmark su Common Crawl a workload fisso fino a 64 nodi."
        ],
        links: [
          {
            label: "Apri il repository",
            href: "https://github.com/danielefam/slr_map_reduce"
          }
        ]
      },
      {
        title: "ARDA VSLNet: localizzazione video-linguaggio efficiente",
        visual: "pov",
        text: "VSLNet potenziato con FiLM conditioning e knowledge distillation per localizzare nel tempo istruzioni in linguaggio naturale nei video Ego4D.",
        meta: "Multimodal ML · PyTorch · 2025",
        metric: "88.47%",
        metricLabel: "modello pi\u00f9 compatto",
        bullets: [
          "Prestazioni migliori del 19,73% rispetto a una baseline di dimensioni comparabili.",
          "Con la distillazione a blocchi: 47,62% di parametri e 80,6% di GFLOPs in meno.",
          "Language conditioning, localizzazione temporale ed efficienza riuniti in un'unica pipeline."
        ],
        links: [
          {
            label: "Apri il repository",
            href: "https://github.com/AndreaLolli2912/ARDA-VSLNet-FiLM-Enhanced-Knowledge-Distillation-for-Efficient-NLQ-Localization-in-Ego4D-Videos"
          }
        ]
      },
      {
        title: "Archivio chiave-valore tollerante ai guasti",
        visual: "locks",
        text: "Un archivio chiave-valore distribuito basato su attori, con un registro atomico multi-scrittore e multi-lettore realizzato in Akka.",
        meta: "Sistemi distribuiti · Java / Akka · 2025",
        metric: "MWMR",
        metricLabel: "registro atomico",
        bullets: [
          "Architettura ad attori e scambio di messaggi, senza blocchi sullo stato condiviso.",
          "Test in scenari di tolleranza ai guasti e di carico.",
          "Controllo automatico della cronologia delle operazioni per verificare la linearizzabilit\u00e0."
        ],
        links: [
          {
            label: "Apri il repository",
            href: "https://github.com/marcutudor79/robust-key-value-store"
          }
        ]
      },
      {
        title: "Stima dell'et\u00e0 dalla voce",
        visual: "audio",
        text: "Una pipeline di regressione end-to-end che unisce caratteristiche acustiche, preprocessing tabulare e modelli ensemble ottimizzati.",
        meta: "Audio ML · Python · 2025",
        metric: "1°",
        metricLabel: "nella classifica pubblica del corso",
        bullets: [
          "Estrazione di caratteristiche tempo-frequenza, Mel-spettrogrammi e statistiche del segnale vocale.",
          "Confronto tra CatBoost, Random Forest, riduzione dimensionale e strategie di preprocessing.",
          "Dall'audio grezzo alla valutazione finale della regressione, in un'unica pipeline."
        ],
        links: [
          {
            label: "Apri il repository",
            href: "https://github.com/danielefam/speech-based-age-estimation"
          }
        ]
      }
    ],
    timelineSteps: [
      {
        step: "2025-2027",
        title: "T\u00e9l\u00e9com Paris",
        text: "Master of Science in Engineering: algebra applicata, sistemi software distribuiti e Data Science."
      },
      {
        step: "2024-2025",
        title: "Politecnico di Torino",
        text: "Laurea magistrale in Data Science and Engineering, con un percorso focalizzato su machine learning, deep learning e architetture distribuite per i big data."
      },
      {
        step: "2021-2024",
        title: "Universit\u00e0 degli Studi di Catania",
        text: "Laurea in Ingegneria Informatica, 110/110 e lode. Tesi sul progetto di un filtro Butterworth Tow-Thomas per applicazioni nella banda audio."
      }
    ]
  }
};

const focusGrid = document.getElementById("focus-grid");
const highlightGrid = document.getElementById("highlight-grid");
const timeline = document.getElementById("timeline");
const motionTrack = document.getElementById("motion-track");
const languageButtons = [...document.querySelectorAll("[data-lang]")];
const revealNodes = document.querySelectorAll(".reveal");

function renderList(container, items, template) {
  container.innerHTML = items.map(template).join("");
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
    return `
      <div class="project-atmosphere project-atmosphere-database" aria-hidden="true">
        <span class="database-mark database-mark-a"></span>
        <span class="database-mark database-mark-b"></span>
        <span class="database-mark database-mark-c"></span>
        <span class="database-mark database-mark-d"></span>
        <span class="database-mark database-mark-e"></span>
        <span class="database-mark database-mark-f"></span>
        <span class="database-mark database-mark-g"></span>
        <span class="data-route data-route-a"></span>
        <span class="data-route data-route-b"></span>
        <span class="data-route data-route-c"></span>
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

function applyTranslations(language) {
  const content = translations[language];

  document.documentElement.lang = language;
  document.title = content.title;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const path = node.dataset.i18n.split(".");
    const value = path.reduce((current, key) => current[key], content);
    node.textContent = value;
  });

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
    content.highlightCards,
    (item, index) => `
      <article class="highlight-card ${index === 0 ? "highlight-card-featured" : ""}">
        ${renderProjectAtmosphere(item.visual)}
        <div class="highlight-topline">
          <span class="project-index">0${index + 1}</span>
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

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("portfolio-language", language);
}

function setupLanguageSwitcher() {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyTranslations(button.dataset.lang));
  });

  const storedLanguage = localStorage.getItem("portfolio-language");
  const browserLanguage = navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
  applyTranslations(storedLanguage || browserLanguage);
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function setupResearchConsole() {
  const console = document.querySelector(".research-console");
  const overview = console?.querySelector('[data-console-view="overview"]');
  const measure = console?.querySelector('[data-console-view="measure"]');
  const openButton = console?.querySelector("[data-console-open]");
  const backButton = console?.querySelector("[data-console-back]");

  if (!console || !overview || !measure || !openButton || !backButton) return;

  openButton.addEventListener("click", () => {
    overview.hidden = true;
    measure.hidden = false;
    backButton.focus();
  });

  backButton.addEventListener("click", () => {
    measure.hidden = true;
    overview.hidden = false;
    openButton.focus();
  });
}

setupLanguageSwitcher();
setupRevealAnimations();
setupResearchConsole();