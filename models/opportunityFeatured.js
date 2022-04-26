const mongoose = require("mongoose");
const Post = require("./opportunityPost");

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
    { collection:"opportunityFeatured"}
  );
  
  module.exports = mongoose.model("opportunityFeaturedPost",featuredpostSchema);
  