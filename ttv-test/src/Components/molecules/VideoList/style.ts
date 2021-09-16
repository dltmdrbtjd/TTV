import styled from 'styled-components';
import Span from '../../atom/Span';
import Text from '../../atom/Text';

export const VideoList = styled.span`
  cursor: pointer;
`;

export const VideoText = styled(Text)`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const VideoBox = styled(Span)`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 23%;
  height: 150px;
  margin: 10px;
  background-color: ${({ theme }) => theme.color.gray};
  cursor: pointer;
  float: left;

  &.active {
    background-color: #6798e6;
  }

  &:hover {
    opacity: 0.7;
  }
`;
