import styled from 'styled-components';
import Grid from '../../atom/Grid';
import Button from '../../atom/Button';

export const VideoWrap = styled(Grid)`
  width: 100%;
  max-width: 1212px;
  padding: 0 60px 20px 60px;
  box-sizing: border-box;
  background-color: #141414;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 33px;
    height: 100%;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #383736;
  }
`;

export const VideoBox = styled(Grid)`
  background-color: ${({ theme }) => theme.color.white};
  height: 220px;
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 22px;
    background-color: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.gray};
    width: 5px;
    background-clip: padding-box;
    border-radius: 9999px;
    border: 5px rgba(0, 0, 0, 0) solid;
  }
`;

export const MatchingBtn = styled(Button)`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #a8a0a0;
  margin-top: 15px;
  color: ${({ theme }) => theme.color.white};

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export const BtnBox = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const VideoCheck = styled(Grid)``;
