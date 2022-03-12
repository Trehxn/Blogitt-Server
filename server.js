const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./db/conn");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

//                                    Posts

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

//                                    Comments

const commentsRouter = require("./routes/comments");
app.use("/comments", commentsRouter);
