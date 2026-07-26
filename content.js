const portfolioCatalogData = {
  projects: [
    {
      id: "casio-digit-recognition",
      visual: "calculator",
      accent: "lime",
      featured: true,
      href: "https://github.com/danielefam/enhance-casio-with-ai",
      content: {
        en: {
          title: "Handwritten Digit Recognition on a calculator",
          text: "A native fixed-point neural network for handwritten digit recognition on the Casio fx-9860GIII, built from NumPy training to portable C inference.",
          meta: "Embedded ML · C / Python · 2026",
          metric: "95.47%",
          metricLabel: "INT8 MNIST accuracy",
          bullets: [
            "Quantized a 256-32-10 MLP to INT8 with a 0.06 percentage-point accuracy loss.",
            "Validated exact NumPy/C parity across 1,000 golden vectors.",
            "Designed inference without floating point, dynamic allocation, or a Python runtime."
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "Riconoscimento di cifre su una calcolatrice",
          text: "Una rete neurale fixed-point per riconoscere cifre scritte a mano su Casio fx-9860GIII: dall'addestramento in NumPy all'inferenza in C portabile.",
          meta: "ML embedded · C / Python · 2026",
          metric: "95.47%",
          metricLabel: "accuratezza INT8 su MNIST",
          bullets: [
            "Una MLP 256-32-10 quantizzata in INT8, con appena 0,06 punti percentuali di accuratezza in meno.",
            "Parit\u00e0 esatta tra NumPy e C verificata su 1.000 vettori di riferimento.",
            "Inferenza senza floating-point, allocazioni dinamiche o runtime Python."
          ],
          linkLabel: "Apri il repository"
        }
      }
    },
    {
      id: "distributed-map-reduce",
      visual: "database",
      accent: "blue",
      featured: false,
      href: "https://github.com/danielefam/slr_map_reduce",
      content: {
        en: {
          title: "Distributed MapReduce on Lab Machines",
          text: "A fault-aware MapReduce framework in Go that deploys remote workers, processes Common Crawl data, and runs pluggable analytical jobs without root access or containers.",
          meta: "Distributed systems · Go · 2026",
          metric: "64 nodes",
          metricLabel: "measured Common Crawl benchmark",
          bullets: [
            "Built the complete load, map, shuffle, reduce, and collect pipeline over HTTP and SSH.",
            "Added cold-spare worker replacement, health monitoring, and epoch-based recovery.",
            "Validated four jobs with 89 Go tests and benchmarked a fixed Common Crawl workload up to 64 nodes."
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "MapReduce distribuito su macchine di laboratorio",
          text: "Un framework MapReduce fault-aware in Go: coordina worker remoti, elabora dati Common Crawl e supporta job analitici estendibili, senza privilegi root n\u00e9 container.",
          meta: "Sistemi distribuiti · Go · 2026",
          metric: "64 nodi",
          metricLabel: "benchmark su Common Crawl",
          bullets: [
            "Pipeline completa di load, map, shuffle, reduce e collect, orchestrata via HTTP e SSH.",
            "Sostituzione automatica dei worker con cold spare, health monitoring e recovery basato su epoch.",
            "Quattro job validati da 89 test Go e un benchmark su Common Crawl a workload fisso fino a 64 nodi."
          ],
          linkLabel: "Apri il repository"
        }
      }
    },
    {
      id: "arda-vslnet",
      visual: "pov",
      accent: "lime",
      featured: false,
      href: "https://github.com/AndreaLolli2912/ARDA-VSLNet-FiLM-Enhanced-Knowledge-Distillation-for-Efficient-NLQ-Localization-in-Ego4D-Videos",
      content: {
        en: {
          title: "ARDA VSLNet: Efficient Video-Language Localization",
          text: "Enhanced VSLNet with FiLM conditioning and knowledge distillation for natural-language temporal localization in Ego4D videos.",
          meta: "Multimodal ML · PyTorch · 2025",
          metric: "88.47%",
          metricLabel: "model size reduction",
          bullets: [
            "Outperformed a similarly sized baseline by 19.73% after distillation.",
            "Used block-wise distillation to reduce parameters by 47.62% and GFLOPs by 80.6%.",
            "Connected language conditioning, temporal localization, and model efficiency in one pipeline."
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "ARDA VSLNet: localizzazione video-linguaggio efficiente",
          text: "VSLNet potenziato con FiLM conditioning e knowledge distillation per localizzare nel tempo istruzioni in linguaggio naturale nei video Ego4D.",
          meta: "Multimodal ML · PyTorch · 2025",
          metric: "88.47%",
          metricLabel: "modello pi\u00f9 compatto",
          bullets: [
            "Prestazioni migliori del 19,73% rispetto a una baseline di dimensioni comparabili.",
            "Con la distillazione a blocchi: 47,62% di parametri e 80,6% di GFLOPs in meno.",
            "Language conditioning, localizzazione temporale ed efficienza riuniti in un'unica pipeline."
          ],
          linkLabel: "Apri il repository"
        }
      }
    },
    {
      id: "fault-tolerant-key-value-store",
      visual: "locks",
      accent: "orange",
      featured: false,
      href: "https://github.com/marcutudor79/robust-key-value-store",
      content: {
        en: {
          title: "Fault-Tolerant Key-Value Store",
          text: "A multi-actor distributed key-value store implementing a multi-writer, multi-reader atomic register with Akka.",
          meta: "Distributed systems · Java / Akka · 2025",
          metric: "MWMR",
          metricLabel: "atomic register",
          bullets: [
            "Built around actors and message passing instead of shared-state locking.",
            "Tested behavior across fault-tolerance and performance scenarios.",
            "Added automated history checking to verify linearizability."
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "Fault-Tolerant Key-Value Store",
          text: "Un archivio chiave-valore distribuito basato su attori, con un registro atomico multi-scrittore e multi-lettore realizzato in Akka.",
          meta: "Sistemi distribuiti · Java / Akka · 2025",
          metric: "MWMR",
          metricLabel: "registro atomico",
          bullets: [
            "Architettura ad attori e scambio di messaggi, senza blocchi sullo stato condiviso.",
            "Test in scenari di tolleranza ai guasti e di carico.",
            "Controllo automatico della cronologia delle operazioni per verificare la linearizzabilit\u00e0."
          ],
          linkLabel: "Apri il repository"
        }
      }
    },
    {
      id: "speech-age-estimation",
      visual: "audio",
      accent: "blue",
      featured: false,
      href: "https://github.com/danielefam/speech-based-age-estimation",
      content: {
        en: {
          title: "Speech-Based Age Estimation",
          text: "An end-to-end regression pipeline combining acoustic feature extraction, tabular preprocessing, and tuned ensemble models.",
          meta: "Audio ML · Python · 2025",
          metric: "1st",
          metricLabel: "class public leaderboard",
          bullets: [
            "Extracted time-frequency, Mel-spectrogram, and statistical speech features.",
            "Compared CatBoost, Random Forest, dimensionality reduction, and tuned preprocessing strategies.",
            "Built the full path from raw audio to evaluated regression outputs."
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "Stima dell'et\u00e0 dalla voce",
          text: "Una pipeline di regressione end-to-end che unisce caratteristiche acustiche, preprocessing tabulare e modelli ensemble ottimizzati.",
          meta: "Audio ML · Python · 2025",
          metric: "1°",
          metricLabel: "nella classifica pubblica del corso",
          bullets: [
            "Estrazione di caratteristiche tempo-frequenza, Mel-spettrogrammi e statistiche del segnale vocale.",
            "Confronto tra CatBoost, Random Forest, riduzione dimensionale e strategie di preprocessing.",
            "Dall'audio grezzo alla valutazione finale della regressione, in un'unica pipeline."
          ],
          linkLabel: "Apri il repository"
        }
      }
    }
  ],
  experiences: [
    {
      id: "banera",
      state: "BANERA / ACTIVE",
      device: "INA226EVM",
      signalLabel: "ENERGY SIGNAL",
      signalValue: "LIVE",
      consoleLabel: "BANERA workflow",
      outcomesLabel: "Current research outcomes",
      activeStep: 2,
      content: {
        en: {
          tag: "Current research · 2026",
          title: "Environmentally-aware Neural Architecture Search",
          text: "At T\u00e9l\u00e9com Paris, I am building BANERA: a hardware-aware neural architecture search framework that uses real energy measurements from edge devices to guide model selection and regularization. Its measurement platform benchmarks neural-network workloads on physical hardware, producing the energy signal that BANERA feeds back into the search process.",
          points: [
            "Hardware-aware architecture search guided by measured energy",
            "Deep Learning energy consumption measure on embedded system",
            "Automated warm-up, calibration, and measured execution",
            "Energy traces and metadata fed back into the search process"
          ],
          outcomes: [
            {
              value: "Physical traces",
              label: "energy measured on the device, not estimated from FLOPs"
            },
            {
              value: "Controlled runs",
              label: "warm-up, calibration, and capture separated automatically"
            },
            {
              value: "Paired evidence",
              label: "raw traces and metadata stored for each experiment"
            }
          ],
          console: {
            overviewLabel: "Architecture search loop",
            detailLabel: "Measurement loop",
            backLabel: "Back",
            overviewSteps: ["Search", "Deploy", "Measure", "Regularize"],
            detailSteps: ["Run", "Calibrate", "Capture", "Analyze"]
          }
        },
        it: {
          tag: "Ricerca attuale · 2026",
          title: "Neural architecture search con un occhio di riguardo all'ambiente",
          text: "Alla T\u00e9l\u00e9com Paris sto sviluppando BANERA, un framework per la ricerca di architetture neurali consapevole dei consumi. Usa misure energetiche reali raccolte su dispositivi edge per guidare la selezione dei modelli e la regolarizzazione. La sua piattaforma di misura esegue benchmark di carichi di lavoro su hardware fisico e riporta il segnale energetico nel processo di ricerca.",
          points: [
            "Neural architecture search, guidata dai consumi reali.",
            "Misurazione del consumo energetico tramite deep learning su un sistema embedded",
            "Warm-up, calibrazione ed esecuzione misurata gestiti in automatico",
            "Tracce energetiche e metadati riportati nel processo di ricerca"
          ],
          outcomes: [
            {
              value: "Misure reali",
              label: "energia rilevata sul dispositivo, non stimata dai FLOPs"
            },
            {
              value: "Esperimenti controllati",
              label: "warm-up, calibrazione e acquisizione automatizzati e verificati"
            },
            {
              value: "Dati completi",
              label: "tracce grezze e metadati archiviati per ogni esperimento"
            }
          ],
          console: {
            overviewLabel: "Ciclo di ricerca dell'architettura",
            detailLabel: "Ciclo di misura",
            backLabel: "Indietro",
            overviewSteps: ["Ricerca", "Esecuzione", "Misura", "Ottimizzazione"],
            detailSteps: ["Esegui", "Calibra", "Acquisisci", "Analizza"]
          }
        }
      }
    }
  ]
};

const catalogLanguages = ["en", "it"];
const projectVisuals = new Set(["calculator", "database", "pov", "locks", "audio"]);
const projectAccents = new Set(["orange", "lime", "blue"]);

function formatProjectHeading(language, count) {
  const numberWords = {
    en: ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
    it: ["Zero", "Un", "Due", "Tre", "Quattro", "Cinque", "Sei", "Sette", "Otto", "Nove", "Dieci"]
  };
  const countLabel = numberWords[language]?.[count] || String(count);

  if (count === 1 && language === "it") return "Un progetto. Un problema concreto.";
  if (count === 1) return "One system. One different constraint.";
  if (language === "it") return `${countLabel} progetti. ${countLabel} problemi concreti.`;
  return `${countLabel} systems. ${countLabel} different constraints.`;
}

function validatePortfolioCatalog(catalog) {
  const errors = [];
  const ids = new Set();

  function requireString(value, path) {
    if (typeof value !== "string" || value.trim() === "") {
      errors.push(`${path} must be a non-empty string`);
    }
  }

  function requireArray(value, path, length) {
    if (!Array.isArray(value) || value.length !== length) {
      errors.push(`${path} must contain exactly ${length} items`);
      return false;
    }
    return true;
  }

  function registerId(id, path) {
    requireString(id, path);
    if (ids.has(id)) errors.push(`${path} must be unique`);
    ids.add(id);
  }

  if (!catalog || !Array.isArray(catalog.projects) || !Array.isArray(catalog.experiences)) {
    throw new Error("Invalid portfolio catalog: projects and experiences must be arrays");
  }

  catalog.projects.forEach((project, index) => {
    const path = `projects[${index}]`;
    registerId(project.id, `${path}.id`);
    if (!projectVisuals.has(project.visual)) errors.push(`${path}.visual is not supported`);
    if (!projectAccents.has(project.accent)) errors.push(`${path}.accent is not supported`);
    if (typeof project.featured !== "boolean") errors.push(`${path}.featured must be a boolean`);

    try {
      const url = new URL(project.href);
      if (url.protocol !== "https:") errors.push(`${path}.href must use https`);
    } catch {
      errors.push(`${path}.href must be a valid URL`);
    }

    catalogLanguages.forEach((language) => {
      const localized = project.content?.[language];
      const localizedPath = `${path}.content.${language}`;
      if (!localized) {
        errors.push(`${localizedPath} is required`);
        return;
      }
      ["title", "text", "meta", "metric", "metricLabel", "linkLabel"].forEach((field) => {
        requireString(localized[field], `${localizedPath}.${field}`);
      });
      if (requireArray(localized.bullets, `${localizedPath}.bullets`, 3)) {
        localized.bullets.forEach((bullet, bulletIndex) => {
          requireString(bullet, `${localizedPath}.bullets[${bulletIndex}]`);
        });
      }
    });
  });

  const featuredCount = catalog.projects.filter((project) => project.featured).length;
  if (featuredCount !== 1) errors.push("projects must contain exactly one featured record");

  catalog.experiences.forEach((experience, index) => {
    const path = `experiences[${index}]`;
    registerId(experience.id, `${path}.id`);
    ["state", "device", "signalLabel", "signalValue", "consoleLabel", "outcomesLabel"].forEach((field) => {
      requireString(experience[field], `${path}.${field}`);
    });
    if (!Number.isInteger(experience.activeStep) || experience.activeStep < 0 || experience.activeStep > 3) {
      errors.push(`${path}.activeStep must be an integer from 0 to 3`);
    }

    catalogLanguages.forEach((language) => {
      const localized = experience.content?.[language];
      const localizedPath = `${path}.content.${language}`;
      if (!localized) {
        errors.push(`${localizedPath} is required`);
        return;
      }
      ["tag", "title", "text"].forEach((field) => {
        requireString(localized[field], `${localizedPath}.${field}`);
      });
      if (requireArray(localized.points, `${localizedPath}.points`, 4)) {
        localized.points.forEach((point, pointIndex) => {
          requireString(point, `${localizedPath}.points[${pointIndex}]`);
        });
      }
      if (requireArray(localized.outcomes, `${localizedPath}.outcomes`, 3)) {
        localized.outcomes.forEach((outcome, outcomeIndex) => {
          requireString(outcome?.value, `${localizedPath}.outcomes[${outcomeIndex}].value`);
          requireString(outcome?.label, `${localizedPath}.outcomes[${outcomeIndex}].label`);
        });
      }

      const consolePath = `${localizedPath}.console`;
      ["overviewLabel", "detailLabel", "backLabel"].forEach((field) => {
        requireString(localized.console?.[field], `${consolePath}.${field}`);
      });
      ["overviewSteps", "detailSteps"].forEach((field) => {
        if (requireArray(localized.console?.[field], `${consolePath}.${field}`, 4)) {
          localized.console[field].forEach((step, stepIndex) => {
            requireString(step, `${consolePath}.${field}[${stepIndex}]`);
          });
        }
      });
    });
  });

  if (catalog.experiences.length === 0) errors.push("experiences must contain at least one record");
  if (errors.length) throw new Error(`Invalid portfolio catalog:\n- ${errors.join("\n- ")}`);
  return true;
}

validatePortfolioCatalog(portfolioCatalogData);

window.portfolioCatalog = portfolioCatalogData;
window.validatePortfolioCatalog = validatePortfolioCatalog;
window.formatProjectHeading = formatProjectHeading;
