import { Post } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostState {
  data: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  data: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } = postSlice.actions;
export default postSlice.reducer;
