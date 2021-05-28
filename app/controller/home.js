const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const data = {
      blogs: (await this.service.blog.findAll()).reverse(),

      // website
      bilibili: "https://space.bilibili.com/480251135",
      github: "https://github.com/ckblt",
    };

    await this.ctx.render("home/index.html", data);
  }
}

module.exports = HomeController;
