import React from 'react';
import * as S from './style';

type Props = {
  children: any;
};

function Blur({ children }: Props) {
  return <S.Blur>{children}</S.Blur>;
}

export default Blur;
