import React from "react";
import naverSprite from "../img/naver.png";
import Nheader_button1 from "./Nheader/Nheader_button1";
import Nheader_button2 from "./Nheader/Nheader_button2";
import SearchBar from "./Nheader/SearchBar";

function Header() {
  const handleSearch = (searchTerm) => {
    console.log("검색어", searchTerm);
  };

  return (
    <div className="container my-0 mx-auto flex flex-col items-center">
      <div className="self-stretch my-[20px] flex justify-between">
        <div className="flex gap-x-[20px] items-center">
          {/* 바로가기 */}
          <Nheader_button1
            backgroundImage={naverSprite}
            backgroundPosition="-314px -330px"
            width="26px"
            height="26px"
          />

          {/* 네이버페이 */}
          <Nheader_button1
            backgroundImage={naverSprite}
            backgroundPosition="-295px -177px"
            width="32px"
            height="32px"
          />
        </div>
        <div className="flex gap-x-[20px] items-center">
          {/* 네이버톡 */}
          <Nheader_button1
            backgroundImage={naverSprite}
            backgroundPosition="-364px -81px"
            width="26px"
            height="26px"
          />

          {/* 알림·혜택 */}
          <Nheader_button1
            backgroundImage={naverSprite}
            backgroundPosition="-364px -27px"
            width="26px"
            height="26px"
          />
        </div>
      </div>
      <div className="flex item-center mb-[20px]">
        {/* 검색창 */}
        <SearchBar onSearch={handleSearch} className="searchbar"></SearchBar>
      </div>

      <div className="flex items-center mb-[40px]">
        {/* 메일 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-250px -90px"
        />

        {/* 카페 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-250px 0px"
        />

        {/* 블로그 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-201px -98px"
        />

        {/* 쇼핑 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-90px -209px"
        />

        {/* 뉴스 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-0px -209px"
        />

        {/* 증권 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-180px -209px"
        />

        {/* 부동산 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-45px -209px"
        />

        {/* 지도 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-201px -0px"
        />

        {/* 웹툰 */}
        <Nheader_button2
          backgroundImage={naverSprite}
          backgroundPosition="-225px -209px"
        />

        {/* 치지직 */}
        <Nheader_button2
          backgroundImage={
            "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png"
          }
          backgroundPosition="-0px -0px"
          backgroundSize="cover"
        />

        {/* 기타 */}
        <Nheader_button2 text="···" />
      </div>
    </div>
  );
}

export default Header;
