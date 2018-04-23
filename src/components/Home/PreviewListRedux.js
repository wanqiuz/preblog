import { login } from '../../api/api';

import { call, put } from 'redux-saga/effects'

const initialState = {
  loading: true,
  error: false,
  articleList: [],
};

const LOAD_ARTICLE = 'LOAD_ARTICLE';
const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
const LOAD_ARTICLE_ERROR = 'LOAD_ARTICLE_ERROR';

export function loadArticles() {
  return {
    //types: [LOAD_ARTICLE, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_ERROR],
    type: LOAD_ARTICLE,
    payload: {
      url: '/api/articles.json',
    }
  };
}

export function* fetchArticlesAsync(action) {
  console.log("before")
  const { response, error } = yield call(login, action.payload.url)
  console.log(response);
  console.log(error);
  if (response) {
    yield put({type: LOAD_ARTICLE_SUCCESS, payload: response});
  } else {
    yield put({type: LOAD_ARTICLE_ERROR, payload: error});
  }
}

function previewList(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ARTICLE: {
      console.log(1);
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ARTICLE_SUCCESS: {
      console.log(2);
      console.log(action.payload.articleList);
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload.articleList,
      };
    }

    case LOAD_ARTICLE_ERROR: {
      console.log(3);
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      console.log(4);
      return state;
    }
  }
}

export default previewList;