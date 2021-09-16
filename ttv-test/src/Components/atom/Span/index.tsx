import React from 'react';
import * as S from './style';

export type Props = {
  children?: any;
  className?: string;
  onClick?: any;
};

function Span({ children, className, onClick }: Props) {
  return (
    <S.Span className={className} onClick={onClick}>
      {children}
    </S.Span>
  );
}

export default Span;
