import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../Modules/configureStore';
import { encdoing, fetchEncoding } from '../../../Modules/Encoding';
import TTVHeader from '../TTVHeader';
import VideoList from '../VideoList';
import * as S from './style';

function MatchingVideos() {
  const dispatch = useDispatch();
  const list = useTypedSelector((state) => state.encoding.list);
  const matching = useTypedSelector((state) => state.encoding.Matching);

  function EncodinggOpen() {
    dispatch(encdoing({ Encoding: true }));
    dispatch(fetchEncoding(MatchList));
  }

  let MatchList: string[] = [];

  function MatchCheck(item: string) {
    const check = MatchList.findIndex((i) => i === item);
    if (check === -1) {
      MatchList.push(item);
    } else if (check !== -1) {
      MatchList.splice(check, 1);
    }
  }

  return (
    <>
      <TTVHeader num="2" name="Matching Videos" />
      <S.VideoWrap>
        {matching ? (
          <>
            <S.VideoBox>
              {list &&
                list.map((item, idx) => {
                  return (
                    <S.VideoCheck key={idx} onClick={() => MatchCheck(item)}>
                      <VideoList item={item} />
                    </S.VideoCheck>
                  );
                })}
            </S.VideoBox>
            <S.BtnBox onClick={() => EncodinggOpen()}>
              <S.MatchingBtn>Matching</S.MatchingBtn>
            </S.BtnBox>
          </>
        ) : null}
      </S.VideoWrap>
    </>
  );
}

export default MatchingVideos;
