import { call, put } from 'redux-saga/effects'

import { login } from '../../api/api';
import { LOAD_ISSUES_SUCCESS, LOAD_ISSUES_FAILURE, LOAD_ISSUE_SUCCESS, LOAD_ISSUE_FAILURE, LOAD_TAGS_SUCCESS, LOAD_TAGS_FAILURE } from '../types/blog';

export function* loadIssuesSaga(action) {
  const { response, error } = yield call(login, action)
  // console.log(response);
  // console.log(error);
  if (response) {
    yield put({type: LOAD_ISSUES_SUCCESS, payload: response});
  } else {
    yield put({type: LOAD_ISSUES_FAILURE, payload: error});
  }
}

export function* loadIssueSaga(action) {
  const { response, error } = yield call(login, action)
  // console.log(response);
  // console.log(error);
  if (response) {
    yield put({type: LOAD_ISSUE_SUCCESS, payload: response});
  } else {
    yield put({type: LOAD_ISSUE_FAILURE, payload: error});
  }
}

export function* loadTagsSaga(action) {
  const { response, error } = yield call(login, action)
  // console.log(response);
  // console.log(error);
  if (response) {
    yield put({type: LOAD_TAGS_SUCCESS, payload: response});
  } else {
    yield put({type: LOAD_TAGS_FAILURE, payload: error});
  }}