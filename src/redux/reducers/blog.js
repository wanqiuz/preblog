import { LOAD_ISSUES, LOAD_ISSUES_SUCCESS, LOAD_ISSUES_FAILURE, LOAD_ISSUE, LOAD_ISSUE_SUCCESS, LOAD_ISSUE_FAILURE,CHANGE_CURRENT_PAGE } from '../types/blog';

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
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ISSUES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload,
      };
    }

    case LOAD_ISSUES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
}

export function loadIssueReducer(state = loadIssueInitialState, action = {}) {
  switch (action.type) {
    case LOAD_ISSUE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ISSUE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        article: action.payload,
      };
    }

    case LOAD_ISSUE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
}

export function changeCurrentPageReducer(state = changeCurrentPageInitialState, action = {}) {
  switch (action.type) {
    case CHANGE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    default: {
      return state;
    }    
  }
}
