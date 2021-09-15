import styled, { keyframes } from 'styled-components';
import Grid from '../../atom/Grid';
import Span from '../../atom/Span';
import Text from '../../atom/Text';

export const TapBox = styled(Grid)`
  width: 480px;
  height: 60px;
  position: relative;
  flex-wrap: wrap;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const InfiniteBar = keyframes`
  33% {
    left: 0;
  }
  50% {
    left: 160px;
  }
  90% {
    left: 320px;
  }
  100% {
    left: 0;
  }
`;

const InfiniteIcon = keyframes`
  33% {
    left: 0px;
  }
  50% {
    left: -480px;
  }
  90% {
    left: -960px;
  }
  100% {
    left: 0px;
  }
`;

export const TapBar = styled(Span)`
  height: 2px;
  width: 160px;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.gray};
  animation: ${InfiniteBar} 3s infinite;
`;

export const TapText = styled(Text)`
  width: 160px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray};
`;

export const TapIconWrap = styled(Grid)`
  width: 480px;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

export const TapIconBox = styled(Grid)`
  width: 1440px;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${InfiniteIcon} 3s infinite;
`;

export const TapIcon = styled(Grid)`
  width: 480px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;
