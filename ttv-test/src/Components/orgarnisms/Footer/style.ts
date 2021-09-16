import styled from 'styled-components';
import Grid from '../../atom/Grid';
import Span from '../../atom/Span';
import Text from '../../atom/Text';

export const FooterWrap = styled(Grid)`
  width: 100%;
  border-top: 1px solid #c4c4c4;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
`;

export const FooterBox = styled(Grid)`
  max-width: 1300px;
  width: 100%;
  display: flex;
`;

export const FooterContent = styled(Span)`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const FooterText = styled(Text)`
  margin-bottom: 15px;
  &.text_deco {
    text-decoration: underline;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
