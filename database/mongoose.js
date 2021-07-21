import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((e) => console.log(e));

mongoose.connection.on("error", (e) => console.log(e));
