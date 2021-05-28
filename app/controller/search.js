const Controller = require("egg").Controller;

class SearchController extends Controller {
  async index() {
    const data = {
      blogs: await this.service.blog.search(this.ctx.URL.searchParams.get("s")),
    };
    // if (data.blogs.toString() !== new URLSearchParams().toString())
    await this.ctx.render("search/index.html", data);
    // else await this.ctx.render("search/notFound.html");
  }
}

module.exports = SearchController;
