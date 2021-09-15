import styled from 'styled-components';
import Button from '../../atom/Button';

export const SignInButton = styled(Button)`
  padding: 10px 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 6px;
`;
