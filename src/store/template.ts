import { article, IArticle } from '@/services/article';
import { createSlice } from '@reduxjs/toolkit';
import { createEffectThunk } from './common/createEffectThunk';
import createSliceState from './common/createSliceState';

export const TEMPLATE_FETCH_VY_ID = 'template/fetchByIdStatus';

export default createSliceState({
  name: 'template',
  initialState: null as IArticle | null,
  reducers: {
    set: (state, action) => state,
  },
  effects: {
    fetchTemplateById: async (state, id: number) => {
      console.log(state, id)
      const data = await article.getArticle(id);
      return data;
    }
  }
})
