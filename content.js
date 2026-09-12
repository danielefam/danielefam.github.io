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
          text: "A native fixed-point neural network for handwritten digit recognition on the Casio fx-9860GIII, built from NumPy training to portable C inference",
          meta: "Embedded ML · C / Python · 2026",
          metric: "95.47%",
          metricLabel: "INT8 MNIST accuracy",
          bullets: [
            "Maintained 95.47% MNIST accuracy with only 0.06 percentage-point loss vs FP32 by quantizing a 256-32-10 MLP to INT8 precision",
            "Guaranteed 100% numerical inference parity across 1,000 golden test vectors by verifying pure C fixed-point execution against NumPy references",
            "Eliminated runtime memory overhead on a 64 KB RAM calculator by engineering a standalone C inference engine with zero dynamic allocations or floating-point instructions"
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "Riconoscimento di cifre scritte a mano su calcolatrice",
          text: "Una rete neurale fixed-point nativa per il riconoscimento di cifre scritte a mano su Casio fx-9860GIII: dall'addestramento in NumPy all'inferenza portabile in C puro",
          meta: "ML embedded · C / Python · 2026",
          metric: "95.47%",
          metricLabel: "accuratezza INT8 su MNIST",
          bullets: [
            "Mantenuta un'accuratezza del 95,47% su MNIST con appena 0,06 punti percentuali di scarto dal float32, quantizzando un MLP 256-32-10 a precisione INT8",
            "Garantita la perfetta parità numerica (100%) su 1.000 vettori di test, validando l'inferenza fixed-point in C puro a fronte della baseline NumPy",
            "Azzerato l'overhead di memoria su calcolatrice con 64 KB di RAM, realizzando un motore di inferenza in C autonomo senza allocazioni dinamiche né istruzioni floating-point"
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
          text: "A fault-aware MapReduce framework in Go that deploys remote workers, processes Common Crawl data, and runs pluggable analytical jobs without root access or containers",
          meta: "Distributed systems · Go · 2026",
          metric: "64 nodes",
          metricLabel: "measured Common Crawl benchmark",
          bullets: [
            "Scaled distributed analytical processing up to 64 unprivileged lab nodes by architecting an automated load-map-shuffle-reduce pipeline over HTTP and SSH",
            "Achieved continuous job availability with zero data loss during worker node crashes by implementing cold-spare replacement, heartbeats, and epoch-based recovery",
            "Validated distributed reliability across 4 analytical jobs with 89 automated Go unit tests by benchmarking high-throughput Common Crawl workloads"
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "MapReduce distribuito su macchine di laboratorio",
          text: "Un framework MapReduce fault-tolerant in Go che coordina worker remoti, elabora dump Common Crawl ed esegue job analitici modulari senza privilegi di root né container",
          meta: "Sistemi distribuiti · Go · 2026",
          metric: "64 nodi",
          metricLabel: "benchmark con dataset Common Crawl",
          bullets: [
            "Scalata l'elaborazione distribuita fino a 64 nodi di laboratorio senza privilegi di root, realizzando una pipeline MapReduce modulare coordinata via HTTP e SSH",
            "Garantita la continuità del servizio a fronte di crash dei nodi senza perdita di dati, implementando cold spare, monitoraggio heartbeat e ripristino su epoche",
            "Validata l'affidabilità su 4 job analitici tramite 89 test automatici in Go, eseguendo benchmark prestazionali su dataset Common Crawl"
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
          text: "Enhanced VSLNet with FiLM conditioning and knowledge distillation for natural-language temporal localization in Ego4D videos",
          meta: "Multimodal ML · PyTorch · 2025",
          metric: "88.47%",
          metricLabel: "model size reduction",
          bullets: [
            "Outperformed an equal-sized baseline by 19.73% on Ego4D NLQ localization by transferring multimodal representations through knowledge distillation",
            "Reduced model parameters by 47.62% and compute by 80.6% GFLOPs by designing a structured block-wise distillation strategy",
            "Enhanced cross-modal grounding under tight parameter constraints by integrating FiLM conditioning directly into the compact temporal backbone"
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "ARDA VSLNet: localizzazione video-linguaggio efficiente",
          text: "Estensione di VSLNet con FiLM conditioning e knowledge distillation per la localizzazione temporale di query in linguaggio naturale nei video Ego4D",
          meta: "Multimodal ML · PyTorch · 2025",
          metric: "88.47%",
          metricLabel: "riduzione della dimensione del modello",
          bullets: [
            "Superata del 19,73% una baseline di pari dimensioni su Ego4D NLQ, trasferendo rappresentazioni multimodali tramite knowledge distillation",
            "Ridotti i parametri del 47,62% e la complessità computazionale dell'80,6% dei GFLOP, progettando una distillazione strutturata a blocchi",
            "Migliorato il condizionamento video-linguaggio con risorse computazionali ridotte, integrando moduli FiLM direttamente nella dorsale temporale compatta"
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
          text: "A multi-actor distributed key-value store implementing a multi-writer, multi-reader atomic register with Akka",
          meta: "Distributed systems · Java / Akka · 2025",
          metric: "MWMR",
          metricLabel: "atomic register",
          bullets: [
            "Eliminated lock contention and concurrency bottlenecks by implementing a Multi-Writer Multi-Reader (MWMR) atomic register using Akka actor message passing",
            "Preserved data consistency across simulated node crashes and network splits by engineering quorum-based consensus protocols with dynamic replication",
            "Verified strict atomic register semantics with 100% linearizable traces by building an automated history-checking verification harness analyzing read/write logs"
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "Key-Value Store distribuito e fault-tolerant",
          text: "Uno storage chiave-valore distribuito basato sul modello ad attori, che implementa un registro atomico multi-writer multi-reader (MWMR) in Akka",
          meta: "Sistemi distribuiti · Java / Akka · 2025",
          metric: "MWMR",
          metricLabel: "registro atomico",
          bullets: [
            "Eliminati colli di bottiglia e contesa sui lock, implementando un registro atomico Multi-Writer Multi-Reader (MWMR) basato su passaggio di messaggi tra attori Akka",
            "Preservata la consistenza dei dati sotto crash di nodi e partizioni di rete simulate, sviluppando protocolli di consenso a quorum con replicazione dinamica",
            "Dimostrata la correttezza formale delle esecuzioni con il 100% di tracce linearizzabili, realizzando un tool automatico di verifica della cronologia read/write"
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
          text: "An end-to-end regression pipeline combining acoustic feature extraction, tabular preprocessing, and tuned ensemble models",
          meta: "Audio ML · Python · 2025",
          metric: "1st",
          metricLabel: "class public leaderboard",
          bullets: [
            "Secured 1st place on the course public leaderboard by engineering an end-to-end ensemble regression pipeline combining CatBoost and Random Forest",
            "Maximized regression accuracy across diverse speaker demographics by extracting hybrid Mel-spectrogram, spectral, and statistical speech features",
            "Minimized estimation error on out-of-distribution audio recordings by systematically tuning dimensionality reduction and robust scaling strategies"
          ],
          linkLabel: "View repository"
        },
        it: {
          title: "Stima dell'età da segnali vocali",
          text: "Una pipeline di regressione end-to-end che combina estrazione di feature acustiche, preprocessing tabulare e modelli ensemble ottimizzati",
          meta: "Audio ML · Python · 2025",
          metric: "1°",
          metricLabel: "posto nella classifica pubblica del corso",
          bullets: [
            "Conquistato il 1° posto nella classifica pubblica del corso, sviluppando una pipeline di regressione ensemble che combina CatBoost e Random Forest",
            "Massimizzata l'accuratezza predittiva su parlanti eterogenei, estraendo feature ibride da spettrogrammi Mel, descrittori spettrali e parametri statistici",
            "Minimizzato l'errore di stima su registrazioni vocali fuori distribuzione, ottimizzando strategie di riduzione dimensionale e scaling robusto"
          ],
          linkLabel: "Apri il repository"
        }
      }
    }
  ],
  experiences: [
    {
      id: "joulenas",
      state: "JOULE / COMPLETED",
      device: "INA226EVM",
      signalLabel: "ENERGY SIGNAL",
      signalValue: "COMPLETED",
      consoleLabel: "Joule ecosystem workflow",
      outcomesLabel: "Research outcomes",
      activeStep: 3,
      content: {
        en: {
          tag: 'Research internship · <a href="https://anr.fr/Projet-ANR-24-CE23-4369" target="_blank" rel="noreferrer" class="research-fund-link" title="ANR BANERA project">BANERA</a> · 2026',
          title: "Environmentally-aware Neural Architecture Search",
          text: "At Télécom Paris (LTCI), I engineered the Joule ecosystem, an end-to-end framework to measure, model, and minimize neural network energy consumption on edge hardware by coupling physical telemetry, differentiable estimation, and hardware-regularized pruning.",
          points: [
            "JouleQuest: Automated hardware energy profiling across 2,000+ layer configurations on Jetson and Raspberry Pi boards by building a synchronized telemetry tool with an INA226EVM sensor",
            "JouleGrad: Enabled exact differentiable energy optimization in PyTorch by replacing heuristic lookup tables with a multilinear interpolation autograd estimator",
            "JouleNAS: Built a neural architecture search tool regularized by the energy consumption of the models to prune networks during training",
            "Validated results: Physically validated up to 60% energy reduction on real hardware measurements (Raspberry Pi 5, NVIDIA Jetson) on ResNet-18 with zero accuracy loss, identifying hardware-specific cache and memory bottlenecks"
          ],
          outcomes: [
            {
              value: "60%",
              label: "energy reduction validated on real hardware (Pi 5 / Jetson) with zero accuracy loss"
            },
            {
              value: "2,000+",
              label: "layer configurations profiled with physical sensor telemetry"
            },
            {
              value: "3 tools",
              label: "JouleQuest (measure), JouleGrad (estimate), JouleNAS (search)"
            }
          ],
          console: {
            overviewLabel: "Joule ecosystem workflow",
            backLabel: "Back",
            overviewSteps: ["Measure", "Model", "Train", "Deploy"],
            subWorkflows: {
              measure: {
                label: "JouleQuest measurement loop",
                tool: "JouleQuest",
                steps: ["Run", "Calibrate", "Capture", "Analyze"]
              },
              model: {
                label: "JouleGrad differentiable estimator",
                tool: "JouleGrad",
                steps: ["Tabulate", "Bracket", "Interpolate", "Differentiate"]
              },
              train: {
                label: "JouleNAS training loop",
                tool: "JouleNAS",
                steps: ["Mask", "Penalize", "Step", "Harvest"]
              }
            }
          }
        },
        it: {
          tag: 'Tirocinio di ricerca · <a href="https://anr.fr/Projet-ANR-24-CE23-4369" target="_blank" rel="noreferrer" class="research-fund-link" title="Progetto ANR BANERA">BANERA</a> · 2026',
          title: "Neural Architecture Search per l'efficienza energetica",
          text: "Presso il laboratorio LTCI di Télécom Paris, ho sviluppato l'ecosistema Joule: un framework di ricerca end-to-end per misurare, modellare e ridurre il consumo energetico delle reti neurali su hardware edge, combinando telemetria fisica da sensore, stima differenziabile e pruning strutturato vincolato all'hardware.",
          points: [
            "JouleQuest: Automatizzata la profilazione energetica su oltre 2.000 configurazioni di layer su schede Jetson e Raspberry Pi, realizzando un tool di telemetria sincronizzato con sensore INA226EVM",
            "JouleGrad: Resa possibile l'ottimizzazione energetica differenziabile in PyTorch, sostituendo tabelle euristiche con uno stimatore autograd a interpolazione multilineare esatta",
            "JouleNAS: Sviluppato un tool di neural architecture search regolarizzato dal consumo energetico dei modelli per potare le reti durante il training",
            "Risultati validati: Validata fisicamente una riduzione dei consumi energetici fino al 60% tramite misurazioni su hardware reale (Raspberry Pi 5, NVIDIA Jetson) su ResNet-18 senza perdita di accuratezza, identificando colli di bottiglia specifici dell'hardware su cache e memoria"
          ],
          outcomes: [
            {
              value: "60%",
              label: "riduzione dei consumi validata su hardware reale (Pi 5 / Jetson) senza perdita di accuratezza"
            },
            {
              value: "2.000+",
              label: "configurazioni di layer profilate con telemetria da sensore fisico"
            },
            {
              value: "3 moduli",
              label: "JouleQuest (misura), JouleGrad (stima), JouleNAS (ottimizzazione)"
            }
          ],
          console: {
            overviewLabel: "Flusso dell'ecosistema Joule",
            backLabel: "Indietro",
            overviewSteps: ["Misura", "Modellazione", "Training", "Deploy"],
            subWorkflows: {
              measure: {
                label: "Ciclo di misurazione JouleQuest",
                tool: "JouleQuest",
                steps: ["Esecuzione", "Calibrazione", "Campionamento", "Analisi"]
              },
              model: {
                label: "Stimatore differenziabile JouleGrad",
                tool: "JouleGrad",
                steps: ["Tabulazione", "Bracketing", "Interpolazione", "Differenziazione"]
              },
              train: {
                label: "Ciclo di training JouleNAS",
                tool: "JouleNAS",
                steps: ["Mascheramento", "Penalizzazione", "Aggiornamento", "Estrazione"]
              }
            }
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
  const countLabelLower = countLabel.toLowerCase();

  if (count === 1 && language === "it") return "Un sistema, un vincolo reale";
  if (count === 1) return "One system, one different constraint";
  if (language === "it") return `${countLabel} sistemi, ${countLabelLower} vincoli differenti`;
  return `${countLabel} systems, ${countLabelLower} different constraints`;
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
      ["overviewLabel", "backLabel"].forEach((field) => {
        requireString(localized.console?.[field], `${consolePath}.${field}`);
      });
      if (requireArray(localized.console?.overviewSteps, `${consolePath}.overviewSteps`, 4)) {
        localized.console.overviewSteps.forEach((step, stepIndex) => {
          requireString(step, `${consolePath}.overviewSteps[${stepIndex}]`);
        });
      }
      if (!localized.console?.subWorkflows || typeof localized.console.subWorkflows !== "object") {
        errors.push(`${consolePath}.subWorkflows must be an object`);
      } else {
        const subKeys = Object.keys(localized.console.subWorkflows);
        if (subKeys.length === 0) {
          errors.push(`${consolePath}.subWorkflows must contain at least one workflow`);
        }
        subKeys.forEach((key) => {
          const subPath = `${consolePath}.subWorkflows.${key}`;
          const sub = localized.console.subWorkflows[key];
          requireString(sub?.label, `${subPath}.label`);
          requireString(sub?.tool, `${subPath}.tool`);
          if (requireArray(sub?.steps, `${subPath}.steps`, 4)) {
            sub.steps.forEach((step, stepIndex) => {
              requireString(step, `${subPath}.steps[${stepIndex}]`);
            });
          }
        });
      }
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
