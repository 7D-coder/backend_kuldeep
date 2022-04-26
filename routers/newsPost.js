const router = require("express").Router();

//const { json } = require("body-parser");
//const { JSON } = require("express/lib/response");
const JSON = require("JSON");
const {
  createPost,
  deletePost,
  updatePost,
  getPost,
  getFeaturedPosts,
  getPosts,
  searchPost,
  getRelatedPosts,
  uploadImage,
} = require("../controllers/newsPost");
const multer = require("../middleware/multer");
const { postvalidator, validate } = require("../middleware/postvalidtor");
const { parseData } = require("../middleware");

router.post(
  "/create",
  multer.single("thumbnail"),
  parseData,
  postvalidator,
  validate,
  createPost
); // clear

router.put(
  "/:postId",
  multer.single("thumbnail"),
  parseData,
  postvalidator,
  validate,
  updatePost
); //clear

router.delete("/:postId", deletePost); //clear
router.get("/single/:slug", getPost); // clear
router.get("/featured-posts", getFeaturedPosts); // error
router.get("/posts", getPosts); //clear
router.get("/search", searchPost); // clear
router.get("/related-posts/:postId", getRelatedPosts); // clear

router.post("/upload-image", multer.single("image"), uploadImage); //clear

module.exports = router;
