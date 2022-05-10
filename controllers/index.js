const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes);

const blogRoutes = require("./blogRoutes");
router.use("/api/blogs",blogRoutes);

const commentRoutes = require("./commentRoutes");
router.use("/api/comments",commentRoutes);

const homepageRoutes = require("./homepageRoutes");
router.use("/",homepageRoutes);

module.exports = router;