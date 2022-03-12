const express = require("express");
const router = express.Router();
const helpers = require("../helpers/posts");

router.route("/").get(helpers.fetchAllPosts).post(helpers.createPost);

router
  .route("/:id")
  .get(helpers.fetchSinglePost)
  .delete(helpers.deleteSinglePost);

module.exports = router;
