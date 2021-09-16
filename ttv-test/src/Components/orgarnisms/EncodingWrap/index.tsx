import React from 'react';
import Scripting from '../../molecules/Scripting';
import MatchingVideos from '../../molecules/MatchingVideos';
import Encoding from '../../molecules/Encoding';
import * as S from './style';

function EncodingWrap() {
  return (
    <S.Container>
      <div>
        <Scripting />
        <MatchingVideos />
        <Encoding />
      </div>
    </S.Container>
  );
}

export default EncodingWrap;
