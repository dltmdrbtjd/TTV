import styled from 'styled-components';
import Button from '../../atom/Button';
import Grid from '../../atom/Grid';
import Text from '../../atom/Text';

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 300px;
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;
  resize: none;

  ::-webkit-input-placeholder {
    text-align: center;
  }
`;

export const ScriptingWrap = styled(Grid)`
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

export const ConvertBtn = styled(Button)`
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

export const Letters = styled(Text)`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.white};
  text-align: right;
`;
