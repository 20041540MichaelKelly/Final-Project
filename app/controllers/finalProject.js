const FinalProject = {
  index: {
    handler: function (request, h) {
      return h.file("./app/views/main.html");
    },
  },
  login: {
    handler: function (request, h) {
      return h.file("./app/views/login.html");
    },
  },
};

module.exports = FinalProject;
