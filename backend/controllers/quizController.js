const tryCatchHandler = require("../middleweres/tryCatchHandler");
const Quiz = require("../models/QuizModel");

exports.newQuiz = tryCatchHandler(async (req, res) => {
  const { title, quiz } = req.body;

  if (quiz.length > 0 && title) {
    await Quiz.create({ title, quiz });
    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
    });
  } else {
    res.json({
      success: false,
      message: "failed to create quiz",
    });
  }
});

exports.allQuizzes = tryCatchHandler(async (req, res) => {
  const quizzes = await Quiz.find();
  res.status(200).json({ success: true, quizzes });
});
exports.deleteQuiz = tryCatchHandler(async (req, res) => {
  const { id } = req.params;
  await Quiz.findByIdAndDelete(id);
  res.status(200).json({ success: true, message: "Quiz deleted successfully" });
});
