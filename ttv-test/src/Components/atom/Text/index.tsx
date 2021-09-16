import React from 'react';
import * as S from './style';

export type Props = {
  children?: any;
  className?: string;
};

function Text({ children, className }: Props) {
  return <S.Text className={className}>{children}</S.Text>;
}

export default Text;
