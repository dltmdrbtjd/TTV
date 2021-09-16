import React from 'react';
import { useTypedSelector } from '../../../Modules/configureStore';
import TTVHeader from '../TTVHeader';
import VideoList from '../VideoList';
import * as S from './style';

function Encoding() {
  const list = useTypedSelector((state) => state.encoding.EncodingList);
  const encoding = useTypedSelector((state) => state.encoding.Encoding);
  return (
    <>
      <TTVHeader num="3" name="Encoding" />
      <S.EncodingWrap>
        {encoding ? (
          <>
            <S.EncodingBox>
              {list &&
                list.map((item, idx) => {
                  return <VideoList item={item} key={idx} />;
                })}
            </S.EncodingBox>
            <S.BtnBox>
              <S.EncodinggBtn>Encoding</S.EncodinggBtn>
            </S.BtnBox>
          </>
        ) : null}
      </S.EncodingWrap>
    </>
  );
}

export default Encoding;
