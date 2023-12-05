import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CarritoProvider } from './src/Navigation/CarritoContext'; // Ruta correcta a tu CarritoContext
import StackNavigation from './src/Navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <CarritoProvider>
        <StackNavigation />
      </CarritoProvider>
    </NavigationContainer>
  );
};

export default App;
