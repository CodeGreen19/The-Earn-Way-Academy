import { createReducer } from "@reduxjs/toolkit";
export const courseReducer = createReducer({}, (builder) => {
  builder.addCase("AllCourseRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("AllCourseSuccess", (state, action) => {
    state.loading = false;
    state.courses = action.payload.allCourses;
  });

  builder.addCase("AllCourseFail", (state, action) => {
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
