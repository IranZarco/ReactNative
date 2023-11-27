import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/Navigation/StackNavigator';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;
