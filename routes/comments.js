const express = require("express");

const router = express.Router();

const helpers = require("../helpers/comments");

router
  .route("/:id")
  .get(helpers.fetchCommentsByPostId)
  .post(helpers.createComment);

module.exports = router;
