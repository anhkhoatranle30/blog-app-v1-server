import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const post = new PostModel({ title: "please", content: "test content" });

    // await post.save();

    const posts = await PostModel.find({});
    // console.log(posts);
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = new PostModel(req.body);
    await newPost.save();
    res.status(200).send(newPost);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostModel.findByIdAndUpdate(updatePost._id, updatePost, {
      new: true,
    });
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
