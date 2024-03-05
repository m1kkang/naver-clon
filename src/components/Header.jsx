import React from 'react';
import SearchBar from './SearchBar';
import naverSprite from '../img/naver.png';
import naverRG from '../img/rg.png';

function Header() {
  const handleSearch = (searchTerm) => {
    console.log('검색어', searchTerm);
  };

  return (
     <div className='Header' style={{ width: '1280px', height: '267px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px'
      }}>
        
        {/* 바로가기 */}
      <button className="sprite-button" style={{
        content: '',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-314px -330px',
        width: '26px',
        height: '26px',
        position: 'relative',
          border: 'none',
        marginRight: '10px'
        }} />
        
        {/* 네이버페이 */}
      <button className="sprite-button" style={{
        content: '',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-295px -177px',
        width: '32px',
        height: '32px',
        position: 'relative',
          border: 'none',
          marginRight: '10px'
        }} />
        
        {/* 네이버톡 */}
      <button className="sprite-button" style={{
        content: '',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-364px -81px',
        width: '26px',
        height: '26px',
        position: 'relative',
          border: 'none',
        marginRight: '10px'
        }} />
        
        {/* 알림·혜택 */}
      <button className="sprite-button" style={{
        content: '',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-364px -27px',
        width: '26px',
        height: '26px',
        position: 'relative',
        border: 'none'
      }} /></div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        
        {/* <button>경칩 작가소개</button>
        <button>경칩 검색</button> */}
        
        {/* 검색창 */}
        <SearchBar onSearch={handleSearch} className="searchbar">

          {/* 검색버튼 */}
   <button>검색</button>
          
</SearchBar>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', }}>
        
        {/* 메일 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-250px -90px',
        width: '44px',
        height: '44px',
        position: 'relative',
          // border: 'none'
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.3s',
        cursor: 'pointer',
          paddingRight: '20px',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />
        {/* 카페 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-250px -0px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
          cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />
        
        {/* 블로그 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-201px -98px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
          cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 쇼핑 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-90px -209px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
          cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 뉴스 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-0px -209px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
          cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 증권 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-180px -209px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
          cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 부동산 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-45px -209px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
     transition: 'box-shadow 0.3s',
          cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 지도 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-201px -0px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
          cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 웹툰 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${naverSprite})`,
        backgroundSize: '444px 434px',
        backgroundColor: 'white',
        backgroundPosition: '-225px -209px',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
        cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 치지직 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
        backgroundImage: `url(${'https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png'})`,
        backgroundSize: '44px 44px',
        backgroundColor: 'white',
          backgroundPosition: '0px 0px',
        backgroundRepeat: 'no-repeat',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.3s',
        cursor: 'pointer',
        marginRight: '10px'
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        />

        {/* 기타 */}
        <button className="sprite-button" style={{
        content: '',
        display: 'block',
          backgroundPosition: '0px 0px',
        backgroundColor: 'white',
        width: '44px',
        height: '44px',
        position: 'relative',
        border: '1px solid #CCCCCC',
        borderRadius: '16px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.3s',
        cursor: 'pointer',
          marginRight: '10px',
          fontSize: '25px',
          color: 'gray',
        }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; }}
        >···</button>
      </div>
    </div>
  );
}

export default Header;
