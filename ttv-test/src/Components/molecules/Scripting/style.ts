import styled from 'styled-components';
import Button from '../../atom/Button';
import Grid from '../../atom/Grid';
import Text from '../../atom/Text';

export const TitleHeader = styled(Grid)`
  margin-top: -10px;
  width: 1212px;
  padding: 20px 20px;
  box-sizing: border-box;
  background-color: #2e2c2c;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #383737;
  }
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

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 300px;
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;
  resize: none;
`;

export const ScriptingWrap = styled(Grid)`
  width: 100%;
  max-width: 1212px;
  padding: 0 30px 20px 30px;
  box-sizing: border-box;
  background-color: #2e2c2c;
`;

export const ConvertBtn = styled(Button)`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.gray};
  margin-top: 15px;
  color: ${({ theme }) => theme.color.white};
`;

export const Letters = styled(Text)`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.white};
  text-align: right;
`;
