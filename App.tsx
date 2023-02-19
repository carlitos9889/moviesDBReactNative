import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigationApp from './src/navigations/StackNavigationApp';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigationApp />
    </NavigationContainer>
  );
};

export default App;
