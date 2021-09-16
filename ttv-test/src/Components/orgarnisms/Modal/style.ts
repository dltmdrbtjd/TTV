import styled from 'styled-components';
import Button from '../../atom/Button';
import Grid from '../../atom/Grid';
import Text from '../../atom/Text';

export const ModalWrap = styled(Grid)`
  width: 1300px;
  height: 350px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 6px;
  padding: 30px;
  box-sizing: border-box;
`;

export const ModalText = styled(Text)`
  font-size: 14px;

  &.bold {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 20px;
  }

  &.regular {
    font-size: ${({ theme }) => theme.fontSize.la};
    margin-bottom: 20px;
  }
`;

export const BtnBox = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const CloseBtn = styled(Button)`
  padding: 20px;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 10px;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
