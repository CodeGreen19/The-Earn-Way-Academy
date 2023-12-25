import axios from "axios";
import { baseUrl } from "../helper.js";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
export const paymentSslAction = (info) => async (dispatch) => {
  try {
    dispatch({
      type: "SslPaymentRequest",
    });
    const { data } = await axios.post(
      `${baseUrl}/api/v1/payment`,
      info,
      config,
    );
    dispatch({
      type: "SslPaymentSuccess",
      payload: data,
    });
    window.open(data.GatewayPageURL, "_self");
  } catch (error) {
    dispatch({
      type: "SslPaymentFail",
      payload: error.response.data.message,
    });
  }
};
