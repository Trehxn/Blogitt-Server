const Post = require("../models/posts");
const Comment = require("../models/comments");

const fetchAllPosts = async (req, res) => {
  try {
    const postsFound = await Post.find({});

    if (!postsFound) return res.status(404).send("no posts found");
    return res.status(200).json(postsFound);
  } catch (e) {
    return res.status(400).send(e);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
    });

    const postCreated = await newPost.save();
    if (!postCreated) return res.status(404).send("no posts created");
    return res.status(200).send(postCreated);
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteSinglePost = async (req, res) => {
  try {
    const _id = req.params.id;
    const postDelete = await Post.deleteOne({ _id });

    if (!postDelete) return res.status(404).json("No post found");

    const commentDelete = await Comment.deleteMany({ postId: req.params.id });
    if (!commentDelete) return res.status(404).json(commentDelete);

    res.status(200).json("1 post with its comments deleted");
  } catch (e) {
    res.status(500).json(e);
  }
};

const fetchSinglePost = async (req, res) => {
  try {
    const _id = req.params.id;
    const postFind = await Post.findOne({ _id });

    if (!postFind) return res.status(404).json(postFind);

    return res.json(postFind);
  } catch (e) {
    res.status(404).json(e);
  }
};

exports.fetchAllPosts = fetchAllPosts;
exports.createPost = createPost;
exports.fetchSinglePost = fetchSinglePost;
exports.deleteSinglePost = deleteSinglePost;
