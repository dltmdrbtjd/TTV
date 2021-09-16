import axios from 'axios';
import React from 'react';
import * as S from './style';
import { KEY } from './config';

export type Props = {
  item?: any;
};

function VideoList({ item }: Props) {
  React.useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${KEY}&part=snippet&q=${item}&type=video`,
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
  return <S.VideoList />;
}

export default VideoList;
