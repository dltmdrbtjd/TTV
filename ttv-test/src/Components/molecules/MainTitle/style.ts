import styled from 'styled-components';
import Grid from '../../atom/Grid';

export const TitleBox = styled(Grid)`
  display: flex;
  text-align: center;
  max-width: 720px;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  border-left: 1px solid #c4c4c4;
`;

export const MainTitle = styled.h1`
  font-weight: 300;
  font-size: 90px;
  line-height: 1;
`;
