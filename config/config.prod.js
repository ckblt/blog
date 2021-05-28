/**
 * @param {import("egg").EggAppInfo} appInfo
 */
module.exports = (appInfo) => {
  /**
   * @type {import("egg").EggAppConfig}
   */
  let config = {};

  config.cluster = {
    listen: {
      path: "",
      port: 80,
      hostname: "192.168.1.3",
    },
  };

  return config;
};
