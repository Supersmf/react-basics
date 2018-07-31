import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route path={`/`} component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'));

registerServiceWorker();
