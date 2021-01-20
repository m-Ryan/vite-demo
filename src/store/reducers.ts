import { combineReducers } from '@reduxjs/toolkit'

import user from './user';
import template from './template';
import toast from './common/toast';
import loading from './common/loading';

const rootReducer = combineReducers({
  user: user.reducer,
  template: template.reducer,
  toast: toast.reducer,
  loading: loading.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer