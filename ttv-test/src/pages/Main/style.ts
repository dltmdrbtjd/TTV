import styled from 'styled-components';
import Grid from '../../Components/atom/Grid';
import Text from '../../Components/atom/Text';

export const Powered = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;
`;

export const PoweredImg = styled.img``;

export const PoweredBox = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const MainWrap = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwiperSection = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
`;
