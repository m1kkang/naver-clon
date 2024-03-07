import React, { useState } from "react";
import naverRG from "../../img/rg.png";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative ">
      <div className="relative ">
        <input
          type="text"
          placeholder={isFocused ? "검색어를 입력해 주세요." : ""}
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="focus:outline-none w-[709px] h-[58px] rounded-[50px] pr-[70px] pl-[28px] text-[20px] text-[#bbbbbb] border-[#558e41] border-solid border-[1.5px]"
          style={{
            boxSizing: "border-box",
            boxShadow: isFocused ? "0 0 5px rgba(0, 0, 0, 0.3)" : "none",
            transition: "box-shadow 0.3s ease-in-out",
          }}
        />
        <button
          className="sprite-button absolute top-7 right-[10px] bg-[45px 45px] bg-no-repeat w-[45px] h-[45px] cursor-pointer rounded-[16px] mr-[14px] border-none
          translate-y-[-50%]"
          type="submit"
          style={{
            backgroundImage: `url(${naverRG})`,
            backgroundPosition: "0px 0px",
          }}
        />
      </div>
    </form>
  );
}

export default SearchBar;
