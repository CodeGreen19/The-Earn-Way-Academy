import axios from "axios";
import { baseUrl } from "../helper.js";
const config = { headers: { "Content-Type": "application/json" } };
export const signUpAction =
  ({ info, forgetReq }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "NewUserRequest",
      });
      const { data } = await axios.post(
        `${baseUrl}/api/v1/user/signup`,
        { info, forgetReq },
        config,
      );
      dispatch({
        type: "NewUserSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "NewUserFail",
        payload: error.response.data.message,
      });
    }
  };
export const loginAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "LoginRequest",
      });
      const { data } = await axios.post(
        `${baseUrl}/api/v1/user/login`,
        { email, password },
        { withCredentials: true },
      );
      dispatch({
        type: "LoginSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "LoginFail",
        payload: error.response.data.message,
      });
    }
  };
export const otpSubmitAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "ConfirmOtpRequest",
    });
    const { data } = await axios.post(
      `${baseUrl}/api/v1/user/otp/varify`,
      info,
      config,
    );
    dispatch({
      type: "ConfirmOtpSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ConfirmOtpFail",
      payload: error.response.data.message,
    });
  }
};

// user info
export const userInfoAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "UserInfoRequest",
    });
    const { data } = await axios.post(`${baseUrl}/api/v1/user/info`, info, {
      withCredentials: true,
    });
    dispatch({
      type: "UserInfoSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UserInfoFail",
      payload: error.response.data.message,
    });
  }
};
// user info
export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${baseUrl}/api/v1/user/me`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};
// user info
export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutRequest",
    });
    const { data } = await axios.get(`${baseUrl}/api/v1/user/logout`, {
      withCredentials: true,
    });
    dispatch({
      type: "LogoutSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LogoutFail",
      payload: error.response.data.message,
    });
  }
};
// user info
export const changePassword = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "ChangePassRequest",
    });
    const { data } = await axios.put(
      `${baseUrl}/api/v1/user/change/password`,
      info,
      { withCredentials: true },
    );
    dispatch({
      type: "ChangePassSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ChangePassFail",
      payload: error.response.data.message,
    });
  }
};
// -------------------------users action for admin ----------------------------
export const AllUsersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllUsersRequest",
    });
    const { data } = await axios.get(`${baseUrl}/api/v1/admin/user/all`, {
      withCredentials: true,
    });
    dispatch({
      type: "AllUsersSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "AllUsersFail",
      payload: error.response.data.message,
    });
  }
};
export const UpdateRoleAction = (userId, role) => async (dispatch) => {
  console.log("action", userId, role);
  try {
    dispatch({
      type: "UpdateRoleRequest",
    });
    const { data } = await axios.put(
      `${baseUrl}/api/v1/admin/user/update/${userId}`,
      { role },
      {
        withCredentials: true,
      },
    );
    dispatch({
      type: "UpdateRoleSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UpdateRoleFail",
      payload: error.response.data.message,
    });
  }
};
export const DeleteUserAction = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteUserRequest",
    });
    const { data } = await axios.delete(
      `${baseUrl}/api/v1/admin/user/delete/${userId}`,
      {
        withCredentials: true,
      },
    );
    dispatch({
      type: "DeleteUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteUserFail",
      payload: error.response.data.message,
    });
  }
};
