import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalThemeProvider from '../src/styles/GlobalThemeProvider';
import store from './Modules/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <GlobalThemeProvider>
      <App />
    </GlobalThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
