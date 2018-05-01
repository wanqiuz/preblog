import { takeEvery } from 'redux-saga/effects';

import { LOAD_ISSUES, LOAD_ISSUE } from '../types/blog';
import { loadIssuesSaga, loadIssueSaga } from './blog';

export default function* rootSaga() {
  yield takeEvery(LOAD_ISSUES, loadIssuesSaga)
  yield takeEvery(LOAD_ISSUE, loadIssueSaga)
}