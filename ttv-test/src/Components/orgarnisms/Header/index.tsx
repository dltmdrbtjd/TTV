import React from 'react';
import * as S from './style';
import Logo from '../../molecules/Logo';
import SignInBtn from '../../molecules/SignInBtn';

function Header() {
  return (
    <S.Header>
      <Logo />
      <SignInBtn />
    </S.Header>
  );
}

export default Header;
