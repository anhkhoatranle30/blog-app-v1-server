import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    attachment: String,
    likesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model("Post", postSchema);
