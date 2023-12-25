// quizModel.js (or wherever you define your models)
const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  quiz: [
    {
      questionTxt: {
        type: String,
        required: true,
      },

      options: [
        {
          optionText: {
            type: String,
            required: true,
          },
        },
      ],

      correctAnswer: {
        type: String,
        required: true,
      },
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
