import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from './style';
import TTVHeader from '../TTVHeader';
import { matching } from '../../../Modules/Encoding';

function Scripting() {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');

  let textArr: string[] = [];

  function TextScript(text: string) {
    const Arr = text.split(' ');
    const setText = new Set(Arr);
    let mySet = Array.from(setText).filter((item) => item !== '');
    textArr.push(...mySet);
    dispatch(matching({ list: textArr, Matching: true }));
  }

  return (
    <>
      <TTVHeader num="1" name="Scripting" />
      <S.ScriptingWrap>
        <S.TextArea
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Put your script here 500~5,000 letters."
        />
        <S.Letters>{text.length} letters</S.Letters>
        <S.BtnBox>
          <S.ConvertBtn
            onClick={() => TextScript(text)}
            disabled={!!(text.length < 500 || text.length > 5000)}
          >
            Convert
          </S.ConvertBtn>
        </S.BtnBox>
      </S.ScriptingWrap>
    </>
  );
}

export default Scripting;
