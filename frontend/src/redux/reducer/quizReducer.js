import { createReducer } from "@reduxjs/toolkit";
export const quizReducer = createReducer({}, (builder) => {
  builder.addCase("NewQuizRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("NewQuizSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  });

  builder.addCase("NewQuizFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("AllQuizzesRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("AllQuizzesSuccess", (state, action) => {
    state.loading = false;
    state.quizzes = action.payload.quizzes;
  });

  builder.addCase("AllQuizzesFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("DeleteQuizRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("DeleteQuizSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  });

  builder.addCase("DeleteQuizFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });

  builder.addCase("clearError", (state) => {
    state.error = null;
  });

  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});
