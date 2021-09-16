import React from 'react';
import * as S from './style';

export type Props = {
  children?: any;
  className?: string;
  onClick?: any;
  disabled?: any;
};

function Button({ children, className, onClick, disabled }: Props) {
  return (
    <S.Button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </S.Button>
  );
}

export default Button;
