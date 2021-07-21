import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// connect DB
import "./database/mongoose.js";

import postRouter from "./routers/posts.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log("Server is running on port : ", PORT);
});
