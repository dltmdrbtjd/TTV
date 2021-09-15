import React from 'react';
import * as S from './style';

export type Props = {
  children?: any;
  className?: string;
};

function Span({ children, className }: Props) {
  return <S.Span className={className}>{children}</S.Span>;
}

export default Span;
