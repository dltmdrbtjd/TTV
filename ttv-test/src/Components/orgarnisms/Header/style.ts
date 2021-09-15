import styled from 'styled-components';
import Grid from '../../atom/Grid';

export const Header = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  height: 50px;
  margin-top: 6px;
  padding: 30px 10px;
  box-sizing: border-box;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;
