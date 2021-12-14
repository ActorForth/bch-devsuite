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

  writePages(docs_compiled_template, readme_html);

  await exec("npm run build:css");
})();

function writePages(template, html) {
  const pages = html
    .split("<h1>")
    .filter((x) => !!x)
    .map((x) => {
      const content = `<h1>${x}`;
      const dom = domParser.parseFromString(content);
      const page_name = dom.getElementsByTagName("h1")[0].textContent;
      const page_slug = slugify(page_name, { lower: true });
      const file_name = `_site/${page_slug}.html`;
      return {
        name: page_name,
        slug: page_slug,
        file_name: file_name,
        content,
      };
    });
  for (const page of pages) {
    fs.ensureFileSync(page.file_name);
    fs.writeFileSync(
      page.file_name,
      template({ content: new hb.SafeString(page.content), pages })
    );
  }
}
