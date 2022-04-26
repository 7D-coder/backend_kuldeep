const mongoose = require("mongoose");
const Post = require("./newsPost");
const featuredpostSchema = mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Post,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  { collection:"newsFeatured"}
);

module.exports = mongoose.model("newsFeaturedPost", featuredpostSchema);
