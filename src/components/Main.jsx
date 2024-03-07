import React from "react";

function Main() {
  return (
    <div className="Main underline flex gap-x-[30px] container justify-center mx-auto my-0">
      {/* 왼쪽 */}
      <div className="flex flex-col gap-y-[16px]">
        <img
          src="https://ssl.pstatic.net/melona/libs/1482/1482864/5c599bcdd583c097a0a5_20240306172601782.jpg"
          width={830}
          className="border"
        />
        <div className="border p-3">
          <ul className="flex gap-3">
            <li>뉴스스탠드</li>
            <li>언론사편집</li>
            <li>엔터</li>
            <li>스포츠</li>
            <li>경제</li>
          </ul>
          <p className="bg-[#f5f7f8]">분야별뉴스</p>
          <ul className="flex flex-wrap">
            <li className="basis-[50%]">1</li>
            <li className="basis-[50%]">2</li>
            <li className="basis-[50%]">3</li>
            <li className="basis-[50%]">4</li>
          </ul>
          <div className="flex gap-x-5 justify-center border-t">
            <p>{"<"}</p>
            <p>언론사더보기</p>
            <p>{">"}</p>
          </div>
        </div>
        <div className="border">언론사더보기</div>
        <div className="border">쇼핑</div>
      </div>
      {/* 오른쪽 */}
      <div className="flex-1 flex flex-col gap-y-[16px]">
        <div className="border">로그인</div>
        <div className="border">[광고]</div>
        <div className="border">날씨</div>
      </div>
    </div>
  );
}

export default Main;
