// tests/PostList.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RootState } from '@/app/store/store';
import PostList from '../components/PostList';


const mockStore = configureStore<RootState>([]);
const initialState: RootState = {
  posts: {
    data: [],
    loading: false,
    error: null,
  },
  // other slices of state, if any
};

describe('PostList Component', () => {
  it('displays loading state', () => {
    const store = mockStore({
      ...initialState,
      posts: { ...initialState.posts, loading: true },
    });

    const { getByText } = render(
      <Provider store={store}>
        <PostList />
      </Provider>
    );

    expect(getByText(/Loading/i)).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    const store = mockStore({
      ...initialState,
      posts: { ...initialState.posts, error: 'An error occurred' },
    });

    const { getByText } = render(
      <Provider store={store}>
        <PostList />
      </Provider>
    );

    expect(getByText(/Error: An error occurred/i)).toBeInTheDocument();
  });

  it('displays list of posts when data is available', () => {
    const store = mockStore({
      ...initialState,
      posts: {
        ...initialState.posts,
        data: [
          {
            id: 1, title: 'Test Post 1', body: 'This is the first test post', userId: 0
          },
          {
            id: 2, title: 'Test Post 2', body: 'This is the second test post', userId: 0
          },
        ],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <PostList />
      </Provider>
    );

    expect(getByText('Test Post 1')).toBeInTheDocument();
    expect(getByText('This is the first test post')).toBeInTheDocument();
    expect(getByText('Test Post 2')).toBeInTheDocument();
    expect(getByText('This is the second test post')).toBeInTheDocument();
  });
});
