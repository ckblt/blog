const Controller = require("egg").Controller;
const marked = require("marked");

class BlogController extends Controller {
  async index() {
    try {
      const id = this.ctx.URL.pathname.split("/")[2];
      const data = {
        blog: await this.service.blog.find(id),
      };

      data.blog.content = marked(data.blog.content);

      await this.ctx.render("blog/index.html", data);
    } catch {
      await this.ctx.render("blog/notFound.html");
    }
  }

  async all() {
    const sort = this.ctx.URL.searchParams.get("sort");
    const data = {
      blogs:
        sort === "old-new"
          ? await this.service.blog.findAll()
          : sort === "a-z"
          ? (await this.service.blog.findAll()).sort()
          : sort === "z-a"
          ? (await this.service.blog.findAll()).sort().reverse()
          : (await this.service.blog.findAll()).reverse(),
    };

    await this.ctx.render("blog/all.html", data);
  }
}

module.exports = BlogController;
