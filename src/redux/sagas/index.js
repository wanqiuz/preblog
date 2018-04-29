import { takeEvery } from 'redux-saga/effects';

import { LOAD_ISSUES, LOAD_ISSUE, LOAD_TAGS } from '../types/blog';
import { loadIssuesSaga, loadIssueSaga, loadTagsSaga } from './blog';

export default function* rootSaga() {
  yield takeEvery(LOAD_ISSUES, loadIssuesSaga)
  yield takeEvery(LOAD_ISSUE, loadIssueSaga)
  yield takeEvery(LOAD_TAGS, loadTagsSaga)
}