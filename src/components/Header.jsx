import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <a href="/" className="link_text">네이버를 시작페이지로</a>
      <a href="/" className="link_text">쥬니어네이버</a>
      <a href="/" className="link_text">해피빈</a>
      <a href="/"><img src="images/naver_logo.png" className="img_logo"/></a>
      <form>
        <fieldset>
          <legend className="visually-hidden">검색</legend>
          <div className="search_box">
            <input type="text" maxLength="225" tabIndex="1" />
            <button type="submit" tabIndex="2">
              검색
            </button>
          </div>
        </fieldset>
      </form>
      <nav>
        <div className="nav_items">
          <ul>
            <li><a href="/">메일</a></li>
            <li><a href="/">카페</a></li>
            <li><a href="/">블로그</a></li>
            <li><a href="/">지식iN</a></li>
            <li><a href="/">쇼핑</a></li>
            <li><a href="/">Pay</a></li>
            <li><a href="/">TV</a></li>
            <li><a href="/">사전</a></li>
            <li><a href="/">뉴스</a></li>
            <li><a href="/">증권</a></li>
            <li><a href="/">부동산</a></li>
            <li><a href="/">지도</a></li>
            <li><a href="/">영화</a></li>
            <li><a href="/">뮤직</a></li>
            <li><a href="/">책</a></li>
            <li><a href="/">웹툰</a></li>
            <li><a href="/">더보기</a></li>
          </ul>
          <div className="keyword">
            <span className="color_naver">1</span>
            <span>Eoldam spark</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
