import React from "react";
import Nbanner_button1 from "./Nbanner_button1";
import Nbanner_button2 from "./Nbanner_button2";
import Nbanner_button3 from "./Nbanner_button3";

function Nbanner_area() {
  return (
    <div className="bg-[#f5f6f7] w-[1280] flex justify-center items-center m-auto whitespace-pre-wrap text-center">
      {/* 나도 창작자 발굴 프로젝트 */}
      <Nbanner_button1
        backgroundImage={
          "https://ssl.pstatic.net/melona/libs/1487/1487000/dc02ef30bafe43cf4a40_20240220102149369.png"
        }
      />

      <div className="flex flex-col">
        {/* 네이버 프리미엄 콘텐츠 */}
        <Nbanner_button2 maxWidth="150px">
          네이버 프리미엄콘텐츠
        </Nbanner_button2>

        {/* 콘텐츠로 돈 벌 수 있을까 */}
        <Nbanner_button3>콘텐츠로 돈 벌 수 있을까</Nbanner_button3>
        <p className="text-[#545454] text-[14px]">프리미엄 스타 채널의</p>
        <p className="text-[#545454] text-[14px]">주인공에 도전하세요</p>
      </div>

      {/* 최대 1억원 */}
      <Nbanner_button1
        backgroundImage={
          "https://ssl.pstatic.net/melona/libs/1488/1488884/b32b79b78ff028d1e082_20240305165400124.png"
        }
      />

      <div className="flex flex-col">
        {/* 중소벤처기업부 */}
        <Nbanner_button2 maxWidth="100px">중소벤처기업부</Nbanner_button2>

        {/* 강한 소상공인 성장지원사업 */}
        <Nbanner_button3>강한 소상공인 성장지원사업</Nbanner_button3>
        <p className="text-[#545454] text-[14px]">사업화자금 최대 1억원!</p>
        <p className="text-[#545454] text-[14px]">지금 바로 도전하세요!!</p>
      </div>

      {/* 사회성 */}

      <Nbanner_button1
        backgroundImage={
          "https://ssl.pstatic.net/melona/libs/1479/1479913/77c890a43f0f2d0ffb57_20240228161944893.jpg"
        }
      />

      <div className="flex flex-col">
        {/* 네이버 커넥트재단 */}
        <Nbanner_button2 maxWidth="125px">네이버 커넥트재단</Nbanner_button2>

        {/* 새학기, 사회성이 걱정이라면 */}
        <Nbanner_button3>새학기, 사회성이 걱정이라면</Nbanner_button3>
        <p className="text-[#545454] text-[14px]">
          소아정신과 천근아 교수와 만든
        </p>
        <p className="text-[#545454] text-[14px]">
          쥬니버스쿨에서 무료로 학습해요
        </p>
      </div>
    </div>
  );
}

export default Nbanner_area;
