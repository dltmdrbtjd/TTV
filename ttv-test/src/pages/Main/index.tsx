import React from 'react';
import MainTitle from '../../Components/molecules/MainTitle';
import Header from '../../Components/orgarnisms/Header';
import SwiperBox from '../../Components/orgarnisms/SwiperBox';
import EncodingWrap from '../../Components/orgarnisms/EncodingWrap';
import * as S from './style';
import Footer from '../../Components/orgarnisms/Footer';
import Modal from '../../Components/orgarnisms/Modal';

function Main() {
  return (
    <>
      <S.MainWrap>
        <div>
          <Header />
          <S.SwiperSection>
            <SwiperBox />
            <MainTitle />
          </S.SwiperSection>
        </div>
      </S.MainWrap>
      <svg
        _ngcontent-lur-c93=""
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        id="svg-top"
      >
        <path
          _ngcontent-lur-c93=""
          d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
          fill="#000"
        />
      </svg>
      <EncodingWrap />
      <svg
        _ngcontent-qpv-c93=""
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        id="svg-bottom"
        style={{ transform: 'scaleY(-1) translateY(1px)' }}
      >
        <path
          _ngcontent-qpv-c93=""
          d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
          fill="#000"
        />
      </svg>
      <S.Powered>powered by</S.Powered>
      <S.PoweredBox>
        <S.PoweredImg src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Shutterstock_logo.svg" />
      </S.PoweredBox>
      <Footer />
      <Modal />
    </>
  );
}

export default Main;
