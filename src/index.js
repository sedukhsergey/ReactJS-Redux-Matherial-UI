import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux'
import store from './stores/store'
import registerServiceWorker from './registerServiceWorker';

render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
	)
registerServiceWorker();
