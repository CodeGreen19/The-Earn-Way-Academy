import React, { useState } from "react";
import bkash from "../../assets/logo/bkash.png";
import ssl from "../../assets/logo/sslcommerz-accept.jpg";
import Headline from "../helper/Headline";
import { useDispatch } from "react-redux";
import { paymentSslAction } from "../../redux/action/paymentAction";

function Payment() {
  const [bkashChecked, setBkashChecked] = useState(false);
  const [sslChecked, setSslChecked] = useState(false);
  const dispatch = useDispatch();
  const handleChecked = (method) => {
    if (method === "bkash") {
      setBkashChecked(true);
      setSslChecked(false);
    } else {
      setBkashChecked(false);
      setSslChecked(true);
    }
  };

  const handlePayment = () => {
    if (bkashChecked) {
      alert("payment using bkash");
    } else {
      let info = {
        price: 120,
        courseName: "hsc ict",
      };
      dispatch(paymentSslAction(info));
    }
  };
  return (
    <div className="min-h-screen w-full ">
      <div className="md:ml-[15%]">
        <Headline text={"Confirm Payment"} side={"start"} />
      </div>
      <div className="m-auto flex w-full flex-col  md:w-[90%] md:flex-row md:justify-between  lg:w-[80%] xl:w-[70%]">
        <div className=" w-full  md:w-[47%]">
          <ul className="b_1 order_summery_ul w-full rounded">
            <li>
              <span>Product Price</span> <span>1250 &#2547;</span>
            </li>
            <div>
              <input
                type="text"
                className="b_1 my-1 w-full rounded px-2 py-2 outline-none "
                placeholder="Promo Code"
              />
              <div className="flex justify-end">
                <button className="signature_btn">Submit</button>
              </div>
            </div>
            <li>
              <span>Discount</span>
              <span className="text-[tomato]">15%</span>
            </li>
            <li>
              <span>Total</span>
              <span className="text-[1.2rem]">1020 &#2547;</span>
            </li>
          </ul>
        </div>
        <div className="b_1 mb-8 rounded p-4 md:w-[47%]">
          <h2 className="text-[1.1rem ] ls_1 p-3">
            Select payment Method (Bkash/Others)
          </h2>
          <div className=" my-3 flex items-center justify-between">
            <input
              className="h-[25px] w-[25px]"
              onChange={() => handleChecked("bkash")}
              checked={bkashChecked}
              type="checkbox"
            />
            <img src={bkash} className="w-[150px]" alt="bkashImage" />
          </div>
          <div className="my-3 flex items-center justify-between">
            <input
              className="h-[25px] w-[25px]"
              onChange={() => handleChecked("ssl")}
              checked={sslChecked}
              type="checkbox"
            />
            <img src={ssl} className="w-[85%]" alt="sslCommerzImage" />
          </div>
          <button
            className={`signature_btn ${
              bkashChecked || sslChecked ? " " : "bg-[gray]"
            }`}
            onClick={handlePayment}
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
