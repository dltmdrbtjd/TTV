import React from 'react';
import * as S from './style';

type Props = {
  num: string;
  name: string;
};

function TTVHeader({ num, name }: Props) {
  const [title, setTitle] = React.useState<boolean>(false);

  function TitleClick() {
    setTitle(true);
    setTimeout(() => {
      setTitle(false);
    }, 1000);
  }
  return (
    <S.TitleHeader onClick={() => TitleClick()}>
      {title ? <S.linearBox /> : null}
      <S.TitleNum>{num}</S.TitleNum>
      <S.TitleText>{name}</S.TitleText>
    </S.TitleHeader>
  );
}

export default TTVHeader;
