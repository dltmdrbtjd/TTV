import React from 'react';
import * as S from './style';

function Scripting() {
  return (
    <>
      <S.TitleHeader>
        <S.TitleNum>1</S.TitleNum>
        <S.TitleText>Scripting</S.TitleText>
      </S.TitleHeader>
      <S.ScriptingWrap>
        <S.TextArea placeholder="Put your script here 500~5,000 letters." />
        <S.Letters>0 letters</S.Letters>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <S.ConvertBtn>Convert</S.ConvertBtn>
        </div>
      </S.ScriptingWrap>
    </>
  );
}

export default Scripting;
