const express = require("express");

const { isUserExists } = require("../middleweres/userAuth");
const {
  createCourse,
  allCourses,
  deleteCourses,
} = require("../controllers/courseControle");
const router = express.Router();
router.post("/course/create", isUserExists, createCourse);
router.get("/course/all", allCourses);
router.delete("/course/delete/:id", deleteCourses);

module.exports = router;
