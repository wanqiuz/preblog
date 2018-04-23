import { LOAD_ISSUES, LOAD_ISSUE, CHANGE_CURRENT_PAGE } from '../types/blog';

// export function loadIssues() {
//   return {
//     type: LOAD_ISSUES,
//     payload: {
//       url: 'https://api.github.com/repos/axuebin/articles/issues',
//       // params: {
//       //     creator: 'axuebin',
//       //     labels: 'blog',
//       // },
//     },
//   };
// }

export function loadIssues() {
  return {
    type: LOAD_ISSUES,
    payload: {
      url: 'http://127.0.0.1:8080/api/v1/articles',
    },
  };
}

export function loadIssue(id) {
  const url = `http://127.0.0.1:8080/api/v1/articles/${id}`;
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