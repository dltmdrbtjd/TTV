import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

type Prop = {
  theme: {
    [propName: string]: any;
  };
};

const GlobalStyle = createGlobalStyle<Prop>`
  ${reset};
  body {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.black};
    line-height: 1.5;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    margin: 0;
    padding: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  button, input {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }
  menu, ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
