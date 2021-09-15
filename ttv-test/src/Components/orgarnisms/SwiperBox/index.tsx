import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import * as S from './style';

function SwiperBox() {
  return (
    <div>
      <S.TapBox>
        <S.TapText>Text</S.TapText>
        <S.TapText>To</S.TapText>
        <S.TapText>Video</S.TapText>
        <S.TapBar />
      </S.TapBox>
      <S.TapIconWrap>
        <S.TapIconBox>
          <S.TapIcon>
            <DescriptionIcon style={{ width: '160px', height: '160px' }} />
          </S.TapIcon>
          <S.TapIcon>
            <ArrowForwardIcon style={{ width: '160px', height: '160px' }} />
          </S.TapIcon>
          <S.TapIcon>
            <MovieFilterIcon style={{ width: '160px', height: '160px' }} />
          </S.TapIcon>
        </S.TapIconBox>
      </S.TapIconWrap>
    </div>
  );
}

export default SwiperBox;
