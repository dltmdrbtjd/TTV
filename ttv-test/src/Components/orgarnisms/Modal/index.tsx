import React from 'react';
import * as S from './style';
import Blur from '../../molecules/Blur';

export type Props = {
  open?: boolean;
  close?: any;
};

function Modal({ open, close }: Props) {
  return (
    <>
      {open ? (
        <Blur>
          <S.ModalWrap>
            <S.ModalText className="bold">Terms of Use</S.ModalText>
            <S.ModalText className="regular">Shutterstock</S.ModalText>
            <S.ModalText>
              ● Content is for digital use within Wayne Hills Ventures only and
              may not be used for printing.
            </S.ModalText>
            <S.ModalText>
              ● You may not use the content as a trademark for a business.
            </S.ModalText>
            <S.ModalText>
              ● You may not portray a person in a way that may be offensive,
              including: in connection with adult-oriented services or ads for
              dating services; in connection with the promotion of tobacco
              products; in connection with political endorsements; with
              pornographic, defamatory, unlawful, offensive or immoral content;
              and as suffering from, or being treated for, a physical or mental
              ailment.
            </S.ModalText>
            <S.ModalText>
              ● You may only use the content in campaigns and content created on
              Wayne Hills Ventures, and not with other website or content
              services.
            </S.ModalText>
            <S.BtnBox onClick={close}>
              <S.CloseBtn>Got it !</S.CloseBtn>
            </S.BtnBox>
          </S.ModalWrap>
        </Blur>
      ) : null}
    </>
  );
}

export default Modal;
