import React from "react";

const Nheader_button1 = ({
  backgroundImage,
  backgroundPosition,
  text,
  width,
  height,
}) => {
  console.log(backgroundImage, backgroundPosition);
  return (
    <>
      <button
        className="sprite-button bg-transparent relative cursor-pointer mr-[10px]"
        style={{
          content: "",
          display: "block",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: backgroundPosition,
          backgroundSize: "444px 434px",
          width: width,
          height: height,
        }}
      >
        {text ? text : null}
      </button>
    </>
  );
};

export default Nheader_button1;
