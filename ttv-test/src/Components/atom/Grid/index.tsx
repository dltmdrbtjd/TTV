import React from 'react';
import * as S from './style';

export type Props = {
  children?: any;
  ref?: any;
  className?: string;
};

function Grid({ children, className, ref }: Props) {
  return (
    <S.Grid className={className} ref={ref}>
      {children}
    </S.Grid>
  );
}

export default Grid;
