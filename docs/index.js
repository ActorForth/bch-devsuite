const fs = require("fs-extra");
const hb = require("handlebars");
const md = require("markdown-it")();
const exec = require("exec-sh").promise;
const { JSDOM } = require("jsdom");
const slugify = require("slugify");

(async () => {
  const docs_template = fs.readFileSync("templates/docs.html");
  const docs_compiled_template = hb.compile(docs_template.toString());

  const readme = fs.readFileSync("../README.md");
  const readme_html = md.render(readme.toString());

  // fs.ensureFileSync("_site/index.html");

  // fs.writeFileSync(
  //   "_site/index.html",
  //   docs_compiled_template({ content: new hb.SafeString(readme_html) })
  // );

  writePages(docs_compiled_template, readme_html);

  // await exec("npm run build:css");
})();

function writePages(template, html) {
  const pages = html
    .split("<h1>")
    .filter((x) => !!x)
    .map((x) => {
      const content = `<root><h1>${x}</root>`;
      const dom = JSDOM.fragment(content);
      const page_title = dom.querySelector("h1").textContent;
      const page_slug = slugify(page_title, { lower: true });
      const file_name = `_site/${page_slug}.html`;
      const h2_nodes = Array.from(dom.querySelectorAll("h2"));
      h2_nodes.forEach((node) => {
        node.setAttribute("id", slugify(node.textContent, { lower: true }));
      });
      const submenus = h2_nodes.map((h2) => {
        return {
          title: h2.textContent,
          anchor: `${page_slug}/#${slugify(h2.textContent, { lower: true })}`,
        };
      });
      return {
        name: page_title,
        slug: page_slug,
        file_name: file_name,
        content: dom.childNodes[0].innerHTML,
        submenus,
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
