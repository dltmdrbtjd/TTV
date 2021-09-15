const calRem = (size: number): string => `${size / 16}rem`;

const fontSize = {
  md: calRem(16),
  la: calRem(20),
  xl: calRem(28),
};

const fontWeight = {
  bold: 700,
  regular: 400,
  light: 300,
};

const color = {
  black: '#000000',
  white: '#FDFDFD',
  gray: '#C4C4C4',
  lightGray: '#E7E7E7',
};

const theme = {
  fontSize,
  fontWeight,
  color,
};

export default theme;
