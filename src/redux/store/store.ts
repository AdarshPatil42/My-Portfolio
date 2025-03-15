import { configureStore } from '@reduxjs/toolkit';
import modeReducer from '../features/lightModeSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;