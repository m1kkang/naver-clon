import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function MainPage() {
  return (
    <div className="Main">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default MainPage;