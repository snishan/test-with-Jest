import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../slices/postSlice';
import { Post } from '@/types';


function fetchPostsApi(): Promise<Post[]> {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => response.data);
}

function* fetchPostsSaga() {
  try {
    const posts: Post[] = yield call(fetchPostsApi);
    yield put(fetchPostsSuccess(posts));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

export default function* watchFetchPostsSaga() {
  yield takeLatest(fetchPostsRequest.type, fetchPostsSaga);
}
