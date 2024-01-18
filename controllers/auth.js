const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("65a77489668cc473921f1f69").then((user) => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    return req.session.save();
  });
  then((result) => {
    res.redirect("/");
  }).catch((err) => {
    console.log(err);
  });
};
exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
