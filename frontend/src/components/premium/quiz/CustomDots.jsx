import React from "react";

function CustomDots({ index, onClick, active }) {
  return (
    <div className="py-[10px]">
      <div
        onClick={() => onClick()}
        className={`m-1 mt-5  flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full  text-[white] ${
          active ? "bg-[green]" : "bg-[gray]"
        }`}
      >
        {index + 1}
      </div>
    </div>
  );
}

export default CustomDots;
