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
          text: "A fault-tolerant MapReduce framework in Go that orchestrates remote workers, streams Common Crawl data, and executes pluggable analytical jobs without root access or containers",
          meta: "Distributed systems · Go · 2026",
          metric: "5.45x",
          metricLabel: "speedup across 64 lab nodes",
          bullets: [
            "Achieved a 5.45x scaling speedup across 64 unprivileged lab nodes on Common Crawl by architecting a disk-backed streaming TSV shuffle that eliminated memory and NFS bottlenecks",
            "Guaranteed zero data loss during worker crashes with sub-10s recovery by implementing an epoch-tracked slot state machine that activates cold spares and rewinds stale reduce phases",
            "Validated 4 analytical jobs on Common Crawl, outperforming an 8-node Kafka baseline by 38x (0.266s vs 10.10s), by designing modular Go interfaces and automated integration harnesses"
          ],
          linkLabel: "View repository"
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
          tag: 'Research internship · <a href="https://anr.fr/Projet-ANR-24-CE23-4369" target="_blank" rel="noreferrer" class="research-fund-link" title="ANR BANERA project">BANERA</a> · <a href="https://github.com/danielefam/jouleecosystem-report" target="_blank" rel="noreferrer" class="research-fund-link" title="Joule ecosystem technical report">Technical Report&nbsp;↗</a> · 2026',
          title: "Environmentally-aware Neural Architecture Search",
          text: "At Télécom Paris (LTCI), I engineered the Joule ecosystem, an end-to-end framework to measure, model, and minimize neural network energy consumption on edge hardware by coupling physical telemetry, differentiable estimation, and hardware-regularized pruning.",
          points: [
            '<a href="https://github.com/danielefam/joulequest" target="_blank" rel="noreferrer" class="research-fund-link">JouleQuest&nbsp;↗</a>: Automated hardware energy profiling across 2,000+ layer configurations on Jetson and Raspberry Pi boards by building a synchronized telemetry tool with an INA226EVM sensor',
            '<a href="https://github.com/danielefam/joulegrad" target="_blank" rel="noreferrer" class="research-fund-link">JouleGrad&nbsp;↗</a>: Enabled exact differentiable energy optimization in PyTorch by replacing heuristic lookup tables with a multilinear interpolation autograd estimator',
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
        }
      }
    }
  ]
};

const catalogLanguages = ["en"];
const projectVisuals = new Set(["calculator", "database", "pov", "locks", "audio"]);
const projectAccents = new Set(["orange", "lime", "blue"]);

function formatProjectHeading(arg1, arg2) {
  const count = typeof arg1 === "number" ? arg1 : arg2;
  const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  const countLabel = numberWords[count] || String(count);
  const countLabelLower = countLabel.toLowerCase();

  if (count === 1) return "One system, one different constraint";
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
