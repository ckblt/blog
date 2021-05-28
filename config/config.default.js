const readFileSync = require("fs").readFileSync;

/**
 * @param {import("egg").EggAppInfo} appInfo
 */
module.exports = (appInfo) => {
  /**
   * @type {import("egg").EggAppConfig}
   */
  let config = {};

  config.keys = appInfo.name + "_12";

  // 网站 icon
  config.siteFile = {
    "/favicon.ico": readFileSync(
      __dirname + "/../app/public/favicon/favicon.png"
    ),
  };

  //
  config.notfound = {
    pageUrl: "/static/html/404.html",
  };

  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".html": "nunjucks",
    },
  };

  config.static = {
    prefix: "/static/",
  };

  config.mysql = {
    client: {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "Zhu5843488",
      database: "blog",
    },
    app: true,
    agent: false,
  };

  config.cluster = {
    listen: {
      path: "",
      port: 7001,
      hostname: "192.168.1.3",
    },
  };

  return config;
};
