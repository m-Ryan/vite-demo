import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import toast from '../toast';
import loading from './loading';

export const createEffectThunk = (typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<unknown, void, {}>, options?: Parameters<typeof createAsyncThunk>[2]) => createAsyncThunk(
  typePrefix,
  async (payload, store) => {
    try {
      // store.dispatch(loading.actions.startLoading(''));
      await payloadCreator(payload, store)
    } catch (error) {
      // store.dispatch(toast.actions.add({
      //   message: error.message || error,
      //   duration: 1500,
      //   type: 'error'
      // }));
    }
    finally {
      store.dispatch(loading.actions.endLoading);
    }
  },
  options
)
