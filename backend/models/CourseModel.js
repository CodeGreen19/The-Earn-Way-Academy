const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  introVideo: { type: String, required: true },
  courseInfo: {
    instructor: {
      name: { type: String, required: true },
      image: { url: { type: String, required: true } },
      qualification: { type: String, required: true },
    },
    learn: [{ type: String }],
    timeNeeded: { type: Number, required: true },
    sold: { type: Number, default: "0" },
    price: { type: Number, required: true },
    course: [
      {
        type: { type: String, required: true },
        url: { type: String },
        QuizId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Quiz",
        },
      },
    ],
  },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
