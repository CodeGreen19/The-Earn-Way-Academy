import React from "react";

function Loading() {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="animate-custom-spin  h-6 w-6 rounded-full border-b-2 border-r-2 border-[white]"></div>
    </div>
  );
}

export default Loading;
