const express = require("express");
const {
  newQuiz,
  allQuizzes,
  deleteQuiz,
} = require("../controllers/quizController");
const router = express.Router();

router.post("/quiz/create", newQuiz);
router.get("/quiz/all", allQuizzes);
router.delete("/quiz/delete/:id", deleteQuiz);

module.exports = router;
