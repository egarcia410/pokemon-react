import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import opponentReducer from './store/reducers/opponent';
import userReducer from './store/reducers/user';
import statusReducer from './store/reducers/status';

const rootReducer = combineReducers({
    opponent: opponentReducer,
    user: userReducer,
    status: statusReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
