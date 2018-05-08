import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { loadIssuesReducer, loadIssueReducer, changeCurrentPageReducer, changeLoginFormReducer } from './blog';

export const rootReducer = combineReducers({
  loadIssuesReducer,
  loadIssueReducer,
  changeCurrentPageReducer,
  changeLoginFormReducer,
  routing: routerReducer,
}); 