const fs = require("fs-extra");
const hb = require("handlebars");
const md = require("markdown-it")();
const exec = require("exec-sh").promise;
const DomParser = require("dom-parser");
const slugify = require("slugify");

const domParser = new DomParser();

(async () => {
  const docs_template = fs.readFileSync("templates/docs.html");
  const docs_compiled_template = hb.compile(docs_template.toString());

  const readme = fs.readFileSync("../README.md");
  const readme_html = md.render(readme.toString());

  fs.ensureFileSync("_site/index.html");

  fs.writeFileSync(
    "_site/index.html",
    docs_compiled_template({ content: new hb.SafeString(readme_html) })
  );

  extractPages(docs_compiled_template, readme_html);

  await exec("npm run build:css");
})();

function extractPages(template, html) {
  const htmls = html
    .split("<h1>")
    .filter((x) => !!x)
    .map((x) => `<h1>${x}`);
  for (const content of htmls) {
    const dom = domParser.parseFromString(content);
    const page_name = dom.getElementsByTagName("h1")[0].textContent;
    const page_slug = slugify(page_name, { lower: true });
    const file_name = `_site/${page_slug}.html`;
    fs.ensureFileSync(file_name);
    fs.writeFileSync(
      file_name,
      template({ content: new hb.SafeString(content) })
    );
  }
}
