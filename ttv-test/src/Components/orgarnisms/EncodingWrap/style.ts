import styled from 'styled-components';
import Grid from '../../atom/Grid';

export const Container = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  margin-top: -10px;
`;
