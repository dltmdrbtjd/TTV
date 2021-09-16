import React from 'react';
import Modal from '../Modal';
import * as S from './style';

function Footer() {
  const [open, setOpen] = React.useState<boolean>(false);

  function ModalOpen() {
    setOpen(true);
  }

  function ModalClose() {
    setOpen(false);
  }
  return (
    <>
      <S.FooterWrap>
        <S.FooterBox>
          <S.FooterContent onClick={() => ModalOpen()}>
            <S.FooterText className="text_deco">Terms of Use</S.FooterText>
          </S.FooterContent>
          <S.FooterContent>
            <S.FooterText>
              B1, E10Dong, 70, Magokjungang 10-ro, Gangseo-gu, Seoul, Republic
              of Korea
            </S.FooterText>
            <S.FooterText>Founder : John (Yi.su.min)</S.FooterText>
            <S.FooterText>Email : waynehills.ventures@gmail.com</S.FooterText>
          </S.FooterContent>
        </S.FooterBox>
      </S.FooterWrap>
      <Modal open={open} close={() => ModalClose()} />
    </>
  );
}

export default Footer;
