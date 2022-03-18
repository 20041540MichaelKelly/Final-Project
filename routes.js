const FinalProject = require("./app/controllers/finalProject");

module.exports = [
  { method: "GET", path: "/", config: FinalProject.index },
  { method: "GET", path: "/login", config: FinalProject.login },
  { method: "GET", path: "/home", config: FinalProject.home },
  { method: "GET", path: "/logout", config: FinalProject.logout },

  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
  },
];
