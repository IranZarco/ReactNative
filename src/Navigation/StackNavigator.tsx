// StackNavigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import Inicio from '../screens/Inicio';
import ProductScreen from '../screens/Producto';
import CartScreen from '../screens/Carrito';
import TicketScreen from '../screens/Ticket';
import ServicioScreen from '../screens/Servicio';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options= {{title:''}} component={LoginScreen} />
      <Stack.Screen name="Inicio" options= {{title:''}} component={Inicio} />
      <Stack.Screen name="Producto" options= {{title:''}} component={ProductScreen} />
      <Stack.Screen name="Carrito" options= {{title:''}} component={CartScreen} />
      <Stack.Screen name="Ticket" options= {{title:''}} component={TicketScreen} />
      <Stack.Screen name="Servicio" options= {{title:''}} component={ServicioScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
