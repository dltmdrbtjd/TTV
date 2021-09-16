import React from 'react';
import * as S from './style';

export type Props = {
  item?: any;
};

function VideoList({ item }: Props) {
  const [active, setActive] = React.useState<boolean>(false);

  function VideoCheck() {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <S.VideoBox onClick={() => VideoCheck()} className={active ? 'active' : ''}>
      <S.VideoText>{item}</S.VideoText>
      <S.VideoList />
    </S.VideoBox>
  );
}

export default VideoList;
