import { LOAD_ISSUES, LOAD_ISSUE, CHANGE_CURRENT_PAGE, CHANGE_LOGIN_FORM } from '../types/blog';

const ipAndPort = "47.98.208.0:80";

export function loadIssues() {
  return {
    type: LOAD_ISSUES,
    payload: {
      url: `http://${ipAndPort}/api/v1/articles`,
    },
  };
}

export function loadIssue(id) {
  const url = `http://${ipAndPort}/api/v1/articles/${id}`;
  return {
    type: LOAD_ISSUE,
    payload: {
      url: url,
    },
  };
}

export function changeCurrentPage(currentPage) {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: currentPage,
  };
}

export function changeLoginForm(changedFields) {
  return {
    type: CHANGE_LOGIN_FORM,
    payload: changedFields
  }
}