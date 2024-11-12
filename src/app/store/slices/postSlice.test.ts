import reducer, { fetchPostsSuccess, fetchPostsFailure } from './postSlice';

describe('post reducer', () => {
  it('should handle fetchPostsSuccess', () => {
    const initialState = { data: [], loading: false, error: null };
    const data = [{ id: 1, title: 'Test Post', body: 'This is a test post', userId: 1 }];
    const state = reducer(initialState, fetchPostsSuccess(data));
    expect(state.data).toEqual(data);
  });

  it('should handle fetchPostsFailure', () => {
    const initialState = { data: [], loading: false, error: null };
    const error = 'An error occurred';
    const state = reducer(initialState, fetchPostsFailure(error));
    expect(state.error).toEqual(error);
  });
});
