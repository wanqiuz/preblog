import { LOAD_ISSUES, LOAD_ISSUES_SUCCESS, LOAD_ISSUES_FAILURE, LOAD_ISSUE, LOAD_ISSUE_SUCCESS, LOAD_ISSUE_FAILURE,CHANGE_CURRENT_PAGE } from '../types/blog';

// const loadIssuesInitialState = {
//   loading: true,
//   error: false,
//   articleList: [],
//   currentPage: 1,
// };

const loadIssuesInitialState = {
  loading: true,
  error: false,
  articleList: [],
};

const loadIssueInitialState = {
  loading: true,
  error: false,
  article: null,
};

const changeCurrentPageInitialState = {
  currentPage: 1,
};

export function loadIssuesReducer(state = loadIssuesInitialState, action = {}) {
  switch (action.type) {
    case LOAD_ISSUES: {
      //console.log(1);
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ISSUES_SUCCESS: {
      //console.log(2);
      //console.log(action.payload);
      console.log(action.payload.url);
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload,
      };
    }

    case LOAD_ISSUES_FAILURE: {
      //console.log(3);
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      //console.log(4);
      return state;
    }
  }
}

export function loadIssueReducer(state = loadIssueInitialState, action = {}) {
  switch (action.type) {
    case LOAD_ISSUE: {
      //console.log(1);
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ISSUE_SUCCESS: {
      console.log(12345678);
      //console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: false,
        article: action.payload,
      };
    }

    case LOAD_ISSUE_FAILURE: {
      //console.log(3);
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      //console.log(4);
      return state;
    }
  }
}

export function changeCurrentPageReducer(state = changeCurrentPageInitialState, action = {}) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: {
      //console.log("changeCurrentPageReducer1")
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    default: {
      //console.log("changeCurrentPageReducer2")
      return state;
    }    
  }
}