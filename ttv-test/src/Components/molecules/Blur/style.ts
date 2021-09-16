import styled from 'styled-components';
import Grid from '../../atom/Grid';

export const Blur = styled(Grid)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
