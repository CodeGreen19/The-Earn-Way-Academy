import { createReducer } from "@reduxjs/toolkit";
export const userReducer = createReducer({}, (builder) => {
  builder.addCase("NewUserRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("NewUserSuccess", (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.email = action.payload.email;
    state.userExists = action.payload.exists;
    state.isMailSent = action.payload.mailSent;
  });

  builder.addCase("NewUserFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("LoginRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("LoginSuccess", (state) => {
    state.loading = false;
    state.loggedIn = true;
  });

  builder.addCase("LoginFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("ConfirmOtpRequest", (state) => {
    state.loading = true;
    state.isVarified = false;
  });

  builder.addCase("ConfirmOtpSuccess", (state) => {
    state.loading = false;
    state.isVarified = true;
  });

  builder.addCase("ConfirmOtpFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isVarified = false;
  });
  builder.addCase("UserInfoRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("UserInfoSuccess", (state, action) => {
    state.loading = false;
    state.completed = true;
    state.userInfo = action.payload;
    state.loggedIn = true;
  });

  builder.addCase("UserInfoFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isVarified = false;
  });
  builder.addCase("LoadUserRequest", (state) => {
    state.loading = true;
    state.loggedIn = false;
  });

  builder.addCase("LoadUserSuccess", (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.loggedIn = true;
  });

  builder.addCase("LoadUserFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.loggedIn = false;
  });
  builder.addCase("LogoutRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("LogoutSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  });

  builder.addCase("LogoutFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.loggedIn = false;
  });
  builder.addCase("ChangePassRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("ChangePassSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  });

  builder.addCase("ChangePassFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("AllUsersRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("AllUsersSuccess", (state, action) => {
    state.loading = false;
    state.adminUsers = action.payload.adminUsers;
  });

  builder.addCase("AllUsersFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("UpdateRoleRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("UpdateRoleSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  });

  builder.addCase("UpdateRoleFail", (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
  builder.addCase("DeleteUserRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("DeleteUserSuccess", (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  });

  builder.addCase("DeleteUserFail", (state, action) => {
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
