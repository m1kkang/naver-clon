import React, { useState } from 'react';
import naverRG from '../img/rg.png';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
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
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '706px', height: '58px', position: 'relative' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <input
          type="text"
          placeholder={isFocused ? "검색어를 입력해 주세요." : ""}
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50px',
            padding: '0px 0px 0px 28px',
            boxSizing: 'border-box',
            paddingRight: '70px',
            fontSize: '20px',
            color: '#bbbbbb',
            border: '1.5px solid #558e41',
            boxShadow: isFocused ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        />
        <button className="sprite-button" type="submit" style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundImage: `url(${naverRG})`,
          backgroundSize: '45px 45px',
          backgroundPosition: '0px 0px',
          backgroundRepeat: 'no-repeat',
          width: '45px',
          height: '45px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '16px',
          marginRight: '14px',
        }} />
      </div>
    </form>
  );
}

export default SearchBar;
