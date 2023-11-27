import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from '../screens/Inicio';
import CatalogoJuegos from '../screens/CatalogoJuegos';
import Intercambio from '../screens/Intercambio';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Catálogo de juegos" component={CatalogoJuegos} />
      <Stack.Screen name="Intercambio" component={Intercambio} />
    </Stack.Navigator>
  );
};
