import styled, { keyframes } from 'styled-components';
import Button from '../../atom/Button';
import Grid from '../../atom/Grid';
import Span from '../../atom/Span';

export const TitleHeader = styled(Grid)`
  position: relative;
  width: 1212px;
  padding: 20px 20px;
  box-sizing: border-box;
  background-color: #141414;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #262626;
  }
`;

const linear = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const linearBox = styled(Span)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 65px;
  width: 0;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  animation: ${linear} 1s;
`;

export const TitleText = styled(Grid)`
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.color.bold};
  margin-left: 15px;
`;

export const TitleNum = styled(Button)`
  width: 25px;
  height: 25px;
  border-radius: 30px;
  background-color: #b0a7a7;
`;
