import { createReducer } from "@reduxjs/toolkit";
export const paymentReducer = createReducer({}, (builder) => {
  builder.addCase("SslPaymentRequest", (state) => {
    state.loading = true;
  });

  builder.addCase("SslPaymentSuccess", (state) => {
    state.loading = false;
  });

  builder.addCase("SslPaymentFail", (state, action) => {
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
