import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './redux/configureStore';
import Index from './routes/Index';
import DevTools from './redux/DevTools';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  (
    <Provider store={store}>
      <div>
        <Index history={history}/>
      </div>
    </Provider>
  ), 
  document.getElementById('root')
);