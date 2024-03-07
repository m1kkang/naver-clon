import React from "react";

const Nbanner_button2 = ({ maxWidth, children }) => {
  console.log(maxWidth);
  return (
    <>
      <button
        className="bg-[#a0adb2] h-[20px] border-none rounded-[4px] cursor-pointer text-[13px] text-[#fff]"
        style={{
          content: "",
          padding: "0 6px",
          maxWidth: maxWidth,
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Nbanner_button2;
