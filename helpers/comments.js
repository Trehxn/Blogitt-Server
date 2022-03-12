const Comment = require("../models/comments");

const fetchCommentsByPostId = async (req, res) => {
  try {
    const foundComments = await Comment.find({ postId: req.params.id });

    if (!foundComments) return res.status(200).json(foundComments);
    res.status(200).json(foundComments);
  } catch (e) {
    res.status(400).json(e);
  }
};

const createComment = async (req, res) => {
  try {
    const createComment = new Comment({
      postId: req.body.postId,
      userId: req.body.userId,
      comment: req.body.comment,
    });
    const commentSave = await createComment.save();

    if (!commentSave) return res.status(404).json(commentSave);

    res.status(200).json(commentSave);
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.fetchCommentsByPostId = fetchCommentsByPostId;
exports.createComment = createComment;
