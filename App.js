import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import reducers from './src/reducers';
import WelcomeScreen from './src/screens/WelcomeScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import ResultsScreen from './src/screens/ResultsScreen';

let RootStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Question: QuestionScreen,
  Results: ResultsScreen,
}, {
  initialRouteName: 'Welcome',
  defaultNavigationOptions: {
    title: 'Trivia'
  },
  headerMode: 'none',
});

let Navigation = createAppContainer(RootStack);

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
