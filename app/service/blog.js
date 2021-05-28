const Service = require("egg").Service;
const readFileSync = require("fs").readFileSync;

class BlogService extends Service {
  async findAll() {
    let data = [];
    let len = 1;

    try {
      while (true) {
        readFileSync(__dirname + `/../public/blogs/${len}/config.json`);
        len++;
      }
    } catch {}

    len--;

    for (let i = 0; i < len; i++) {
      const id = i + 1;
      const config = JSON.parse(
        readFileSync(__dirname + `/../public/blogs/${id}/config.json`).toString(
          "utf8"
        )
      );
      const md = readFileSync(
        __dirname + `/../public/blogs/${id}/md.md`
      ).toString("utf8");
      let blog = {
        id: id,
        title: config.title,
        content: md,
        date: new Date(config.date),
        type: config.type,
        img: `/static/blogs/${id}/img.png`,
      };
      data.push(blog);
    }

    return data;
  }

  async find(id) {
    const config = JSON.parse(
      readFileSync(__dirname + `/../public/blogs/${id}/config.json`).toString(
        "utf8"
      )
    );
    const md = readFileSync(
      __dirname + `/../public/blogs/${id}/md.md`
    ).toString("utf8");

    let blog = {
      id: id,
      title: config.title,
      content: md,
      date: new Date(config.date),
      type: config.type,
      img: `/static/blogs/${id}/img.png`,
    };

    return blog;
  }

  async search(s) {
    const blogs = await this.findAll();
    let choose = [];

    if (s == null) {
      return [];
    }

    for (const blog of blogs) {
      if (
        blog.title.toLowerCase().match(s.toLowerCase()) &&
        choose.indexOf(blog) === -1
      )
        choose.push(blog);
      else
        for (const type of blog.type)
          for (const e of s.split(" "))
            if (
              type.toLowerCase().match(e.toLowerCase()) &&
              choose.indexOf(blog) === -1
            )
              choose.push(blog);
    }

    return choose;
  }
}

module.exports = BlogService;
