import { all } from 'redux-saga/effects';
import watchFetchPostsSaga from './sagas/postSaga';


export default function* rootSaga() {
  yield all([watchFetchPostsSaga()]);
}
