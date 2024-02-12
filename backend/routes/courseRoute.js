const express = require("express");

const { isUserExists } = require("../middleweres/userAuth");
const {
  createCourse,
  allCourses,
  deleteCourses,
  searchCourse,
} = require("../controllers/courseControle");
const router = express.Router();
router.post("/course/create", isUserExists, createCourse);
router.get("/course/all", allCourses);
router.delete("/course/delete/:id", deleteCourses);
router.post("/course/search", searchCourse);

module.exports = router;
