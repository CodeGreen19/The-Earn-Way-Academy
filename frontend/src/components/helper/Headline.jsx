import React from "react";

function Headline({ text, side }) {
  const align = side === "end" ? "justify-end" : "justify-start";
  return (
    <div className={` my-3 mt-10 flex w-full items-center ${align}`}>
      <div className="b_1 relative  my-1 h-[40px] w-[300px] rounded bg-[whitesmoke]">
        <div className="bw_1 absolute -top-1/2 left-4 rounded bg-[#252525] px-3 py-2 text-[#e2e2e2]">
          {text}
        </div>
      </div>
    </div>
  );
}

export default Headline;
