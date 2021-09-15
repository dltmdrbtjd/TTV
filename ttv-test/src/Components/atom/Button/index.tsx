import React from 'react';
import * as S from './style';

export type Props = {
  children?: any;
  className?: string;
  onClick?: any;
};

function Button({ children, className, onClick }: Props) {
  return (
    <S.Button onClick={onClick} className={className}>
      {children}
    </S.Button>
  );
}

export default Button;
