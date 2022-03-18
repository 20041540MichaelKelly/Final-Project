const FinalProject = {
  index: {
    handler: function (request, h) {
      return h.view("main", { title: "Welcome to My final project" });
    },
  },
  login: {
    handler: function (request, h) {
      return h.view("login", { title: "Login to Project Directory" });
    },
  },
  home: {
    handler: function (request, h) {
      return h.view("home", { title: "Make a Donation" });
    },
  },
  logout: {
    handler: function (request, h) {
      return h.redirect("/");
    },
  },
};

module.exports = FinalProject;
