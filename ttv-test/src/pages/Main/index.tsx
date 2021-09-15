import React from 'react';
import MainTitle from '../../Components/molecules/MainTitle';
import Scripting from '../../Components/molecules/Scripting';
import Header from '../../Components/orgarnisms/Header';
import SwiperBox from '../../Components/orgarnisms/SwiperBox';

function Main() {
  return (
    <>
      <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <Header />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '1300px',
          }}
        >
          <SwiperBox />
          <MainTitle />
        </div>
      </div>
      <svg
        _ngcontent-lur-c93=""
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        id="svg-top"
        className="position-absolute width-full z-1"
      >
        <path
          _ngcontent-lur-c93=""
          d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
          fill="#000"
        />
      </svg>
      <Scripting />
    </>
  );
}

export default Main;
