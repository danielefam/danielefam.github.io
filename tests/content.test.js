const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function loadContent() {
  const context = { URL, window: {} };
  const source = fs.readFileSync(path.join(__dirname, "..", "content.js"), "utf8");
  vm.runInNewContext(source, context, { filename: "content.js" });
  return context.window;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

const { portfolioCatalog, validatePortfolioCatalog, formatProjectHeading } = loadContent();

test("the current catalog is valid", () => {
  assert.equal(validatePortfolioCatalog(portfolioCatalog), true);
});

test("project headings preserve the current copy and support the next item", () => {
  assert.equal(formatProjectHeading("en", 1), "One system. One different constraint.");
  assert.equal(formatProjectHeading("it", 1), "Un progetto. Un problema concreto.");
  assert.equal(formatProjectHeading("en", 5), "Five systems. Five different constraints.");
  assert.equal(formatProjectHeading("it", 5), "Cinque progetti. Cinque problemi concreti.");
  assert.equal(formatProjectHeading("en", 6), "Six systems. Six different constraints.");
  assert.equal(formatProjectHeading("it", 6), "Sei progetti. Sei problemi concreti.");
});

test("a project can be added with one catalog record", () => {
  const catalog = clone(portfolioCatalog);
  const project = clone(catalog.projects.at(-1));
  project.id = "future-project";
  project.featured = false;
  project.href = "https://example.com/future-project";
  catalog.projects.push(project);

  assert.equal(validatePortfolioCatalog(catalog), true);
  assert.notEqual(
    formatProjectHeading("en", catalog.projects.length),
    formatProjectHeading("en", portfolioCatalog.projects.length)
  );
});

test("an experience can be added with one catalog record", () => {
  const catalog = clone(portfolioCatalog);
  const experience = clone(catalog.experiences.at(-1));
  experience.id = "future-experience";
  experience.state = "FUTURE / ACTIVE";
  catalog.experiences.push(experience);

  assert.equal(validatePortfolioCatalog(catalog), true);
});

test("validation reports the exact invalid field", () => {
  const cases = [
    {
      mutate(catalog) {
        catalog.projects[1].id = catalog.projects[0].id;
      },
      message: "projects[1].id must be unique"
    },
    {
      mutate(catalog) {
        delete catalog.projects[0].content.it;
      },
      message: "projects[0].content.it is required"
    },
    {
      mutate(catalog) {
        catalog.projects[0].visual = "unknown";
      },
      message: "projects[0].visual is not supported"
    },
    {
      mutate(catalog) {
        catalog.projects[0].href = "http://example.com";
      },
      message: "projects[0].href must use https"
    },
    {
      mutate(catalog) {
        catalog.experiences[0].content.en.outcomes.pop();
      },
      message: "experiences[0].content.en.outcomes must contain exactly 3 items"
    },
    {
      mutate(catalog) {
        delete catalog.experiences[0].content.en.console.subWorkflows;
      },
      message: "experiences[0].content.en.console.subWorkflows must be an object"
    }
  ];

  cases.forEach(({ mutate, message }) => {
    const catalog = clone(portfolioCatalog);
    mutate(catalog);
    assert.throws(() => validatePortfolioCatalog(catalog), (error) => error.message.includes(message));
  });
});
