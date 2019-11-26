import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ChartService from './services/chart-service';
import { ChartServiceProvider } from './components/chart-service-contex';

import store from './store';

const chartService = new ChartService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ChartServiceProvider value={chartService}>
                <App />
            </ChartServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);