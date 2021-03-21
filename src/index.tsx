import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './redux/store';
import PersistedRouteRedirectorContainer from "./containers/PersistedRouteRedirectorContainer";
import './index.css';
import App from './components/App';
import DetectResizing from "./components/DetectResizing";
import reportWebVitals from './reportWebVitals';

const { persistor, store } = configureStore;

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <>
          {/* taking info from redux persist about last active route */}
          <Route>
            {(routerProps: any) => (
              <PersistedRouteRedirectorContainer
                redirectTo={routerProps.history.push}
                pathname={routerProps.location.pathname}
              />
            )}
          </Route>
          <DetectResizing />
          <App />
        </>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
