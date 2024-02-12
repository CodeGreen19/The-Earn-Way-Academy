const tryCatchHandler = require("../middleweres/tryCatchHandler");
const Course = require("../models/CourseModel");

exports.createCourse = tryCatchHandler(async (req, res) => {
  const { courseInfo, title, thumbnail, introVideo } = req.body;
  const newCourse = await Course.create({
    courseInfo,
    title,
    thumbnail,
    introVideo,
  });
  res.status(201).json({ success: true, newCourse });
});
exports.allCourses = tryCatchHandler(async (req, res) => {
  const allCourses = await Course.find();
  res.status(201).json({ success: true, allCourses });
});
exports.deleteCourses = tryCatchHandler(async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res
    .status(201)
    .json({ success: false, message: "Course Deleted Successfully" });
});

// search typing in the input fields
exports.searchCourse = tryCatchHandler(async (req, res) => {
  const { query } = req.query;
  const courses = await Course.find({
    $or: [
      { title: { $regex: new RegExp(query, "i") } },
      { "courseInfo.instructor.name": { $regex: new RegExp(query, "i") } },
    ],
  });
  res.status(201).json({ success: true, courses });
});
