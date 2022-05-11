const express = require('express');
const router = express.Router();

const homepageRoutes = require("./homepageRoutes");
router.use("/",homepageRoutes);

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes);

const blogRoutes = require("./blogRoutes");
router.use("/api/blogs",blogRoutes);

const commentRoutes = require("./commentRoutes");
router.use("/api/comments",commentRoutes);

module.exports = router;