import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/userReduce";
import { quizReducer } from "./reducer/quizReducer";
import { courseReducer } from "./reducer/createReducer";
import { paymentReducer } from "./reducer/paymentReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    quizzes: quizReducer,
    course: courseReducer,
    payment: paymentReducer,
  },
});

export default store;
