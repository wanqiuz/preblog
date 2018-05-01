import { call, put } from 'redux-saga/effects'

import { login } from '../../api/api';
import { LOAD_ISSUES_SUCCESS, LOAD_ISSUES_FAILURE, LOAD_ISSUE_SUCCESS, LOAD_ISSUE_FAILURE } from '../types/blog';

export function* loadIssuesSaga(action) {
  const { response, error } = yield call(login, action)
  if (response) {
    yield put({type: LOAD_ISSUES_SUCCESS, payload: response});
  } else {
    yield put({type: LOAD_ISSUES_FAILURE, payload: error});
  }
}

export function* loadIssueSaga(action) {
  const { response, error } = yield call(login, action)
  if (response) {
    yield put({type: LOAD_ISSUE_SUCCESS, payload: response});
  } else {
    yield put({type: LOAD_ISSUE_FAILURE, payload: error});
  }
}