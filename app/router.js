module.exports = (app) => {
  const { router, controller } = app;

  router.get("/", controller.home.index);
  router.get("/blog", controller.blog.all);
  router.get("/blog/*", controller.blog.index);
  router.get("/search", controller.search.index);
  // router.get("/*", controller.notFound.index);
};
