import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TextState = {
  list?: string[];
  EncodingList?: string[];
  Encoding?: boolean;
  Matching?: boolean;
};

const initialState: TextState = {
  list: [],
  EncodingList: [],
  Encoding: false,
  Matching: false,
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    encdoing: (state, action: PayloadAction<TextState>) => {
      state.Encoding = action.payload.Encoding;
    },
    matching: (state, action: PayloadAction<TextState>) => {
      state.Matching = action.payload.Matching;
      state.list = action.payload.list;
    },
    fetchEncoding: (state, action: PayloadAction<string[]>) => {
      state.EncodingList = action.payload;
    },
  },
});

const { reducer, actions } = textSlice;
export const { encdoing, matching, fetchEncoding } = actions;
export default reducer;
