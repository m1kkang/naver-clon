import React from "react";

const Nbanner_button1 = ({ backgroundImage }) => {
  console.log(backgroundImage);
  return (
    <>
      <button
        className="block bg-white bg-no-repeat w-[160px] h-[100px] relative border-none rounded-[6px] cursor-pointer mr-[10px]"
        style={{
          content: "",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "0px 0px",
          backgroundSize: "160px 100px",
        }}
      ></button>
    </>
  );
};

export default Nbanner_button1;
