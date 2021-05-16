import { registerRootComponent } from 'expo';

// import { AppRegistry } from 'react-native';

// import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

// AppRegistry.registerComponent('main', () => App);

import React from 'react';
// import { AppRegistry } from 'react-native';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'

const store=createStore(reducer,middleware)

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
registerRootComponent(RNRedux)
// AppRegistry.registerComponent('root', () => RNRedux);