const fs = require("fs-extra");
const hb = require("handlebars");
const md = require("markdown-it")();

const docs_template = fs.readFileSync("templates/docs.html");
const docs_compiled_template = hb.compile(docs_template.toString());

const readme = fs.readFileSync("../README.md");
const readme_html = md.render(readme.toString());

fs.writeFileSync(
  "_site/README/index.html",
  docs_compiled_template({ content: new hb.SafeString(readme_html) })
);