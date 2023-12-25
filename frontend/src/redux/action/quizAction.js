import axios from "axios";
import { baseUrl } from "../helper.js";
const config = { headers: { "Content-Type": "application/json" } };
export const newQuizAction = (title, quiz) => async (dispatch) => {
  try {
    dispatch({
      type: "NewQuizRequest",
    });
    const { data } = await axios.post(
      `${baseUrl}/api/v1/quiz/create`,
      { title, quiz },
      config,
    );
    dispatch({
      type: "NewQuizSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NewQuizFail",
      payload: error.response.data.message,
    });
  }
};
export const LoadQuizAction = (title, quiz) => async (dispatch) => {
  try {
    dispatch({
      type: "LoadQuizRequest",
    });
    const { data } = await axios.post(`${baseUrl}/api/v1/quiz/load`, config);
    dispatch({
      type: "LoadQuizSuccess",
      payload: data.quizzes,
    });
  } catch (error) {
    dispatch({
      type: "LoadQuizFail",
      payload: error.response.data.message,
    });
  }
};
export const AllQuizzesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllQuizzesRequest",
    });
    const { data } = await axios.get(`${baseUrl}/api/v1/quiz/all`, config);
    dispatch({
      type: "AllQuizzesSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "AllQuizzesFail",
      payload: error.response.data.message,
    });
  }
};
export const deleteQuizAction = (quizId) => async (dispatch) => {
  console.log(quizId);
  try {
    dispatch({
      type: "DeleteQuizRequest",
    });
    const { data } = await axios.delete(
      `${baseUrl}/api/v1/quiz/delete/${quizId}`,
      config,
    );
    dispatch({
      type: "DeleteQuizSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteQuizFail",
      payload: error.response.data.message,
    });
  }
};
