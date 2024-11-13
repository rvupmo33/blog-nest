const express = require("express");
const blogsControllers = require("../controllers/blogs-controller");
const router = express.Router();

const { check } = require("express-validator");


// Route to get all blogs
router.get("/", blogsControllers.getAllBlogs);

// Route to get blogs by a specific user
router.get("/user/:username", blogsControllers.getBlogByUser);

// Route to create a new blog
//router.post("/create", blogsControllers.createBlog);
router.post(
    "/",
    [
      check("title").not().isEmpty().isLength({ min: 5 }),
      check("content").not().isEmpty(),
      check("user").not().isEmpty(),
    ],
    blogsControllers.createBlog
  );
// Route to update a blog by ID
router.patch("/:blogId", blogsControllers.updateBlog);

// Route to delete a blog by ID
router.delete("/:blogId", blogsControllers.deleteBlog);

module.exports = router;
