import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { loadIssuesReducer, loadIssueReducer, changeCurrentPageReducer, loadTagsReducer } from './blog';

export const rootReducer = combineReducers({
  loadIssuesReducer,
  loadIssueReducer,
  changeCurrentPageReducer,
  loadTagsReducer,
  routing: routerReducer,
}); 