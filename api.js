const express = require("express");
const router = express();

const signinRoutes = require("./src/components/auth/signin/signin.routes");
const bookmarkRoutes = require("./src/components/bookmark/bookmark.routes");
const signupRoutes = require("./src/components/auth/signup/signup.routes");
const signoutRoutes = require("./src/components/auth/signout/signout.routes");
const forgotpasswordRoutes = require("./src/components/auth/forgotpassword/forgotpassword.routes");
const serchRoutes = require("./src/components/search/search.routes");
const questionRoutes = require("./src/components/questions/question.routes");
const blogRoutes = require("./src/components/blog/blog.route");
const documentRoutes = require("./src/components/document/doc.route");
const answerRoutes = require("./src/components/answer/answer.route");
const manageUsersRoutes = require("./src/components/admin/manageUsers/manageUsers.routes");
const tagsRoutes = require("./src/components/admin/predefinedTags/tags.routes");
const manageResourcesRoutes = require("./src/components/admin/manageResources/manageResources.routes");

router.use("/", signupRoutes);

router.use("/forgotpassword", forgotpasswordRoutes);

router.use(
  "/users",
  signoutRoutes,
  signinRoutes,
  bookmarkRoutes,
  questionRoutes,
  serchRoutes,
  blogRoutes,
  documentRoutes,
  answerRoutes,
  tagsRoutes
);

router.use("/admin", manageUsersRoutes, tagsRoutes, manageResourcesRoutes);

module.exports = router;
