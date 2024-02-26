import express from "express";

const userPost = express();

userPost.get("/posts", (req, res) => {
  let posts = [
    {
      userId: 1,
      id: 1,
      title: "photo",
      body: "Add a photo",
    },
    {
      userId: 2,
      id: 2,
      title: "send friend request",
      body: "Send friend request to a new person",
    },
    {
      userId: 1,
      id: 3,
      title: "like post",
      body: "Like a post with different like buttons",
    },
  ];

  return res.status(200).send(posts);
});

// network port allocate
const port = 8000;

userPost.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
