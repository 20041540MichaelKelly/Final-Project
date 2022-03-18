const FinalProject = require("./app/controllers/finalProject");

module.exports = [
  { method: "GET", path: "/", config: FinalProject.index },
  { method: "GET", path: "/login", config: FinalProject.login },
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
