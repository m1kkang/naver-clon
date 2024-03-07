import React from "react";

const Nheader_button2 = ({
  backgroundImage,
  backgroundPosition,
  text,
  backgroundSize,
}) => {
  return (
    <>
      <button
        className="sprite-button w-[44px] h-[44px] relative justify-center content-center bg-white rounded-[16px] shadow-[0px_2px_4px_rgba(0, 0, 0, 0.3)] cursor-pointer mr-[10px] text-[gray] text-[25px] text-center"
        style={{
          content: "",
          display: "block",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: backgroundPosition,
          backgroundSize: `${backgroundSize ? backgroundSize : "444px 434px"}`,
          border: "1px solid #CCCCCC",
          transition: "box-shadow 0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
        }}
      >
        {text ? text : null}
      </button>
    </>
  );
};

export default Nheader_button2;
