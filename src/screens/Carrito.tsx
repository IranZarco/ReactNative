// Carrito.tsx
import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCarrito } from '../Navigation/CarritoContext';
import { styles } from '../../theme/appTheme';

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { carrito, quitarDelCarrito } = useCarrito();

  const viewTicket = () => {
    navigation.navigate('Ticket', { carrito });
  };

  return (
    <ScrollView style={styles.carritocontainer}>
      {carrito.map((item, index) => (
        <View key={index} style={styles.carritocontainer1}>
          <Image source={item.image} style={styles.carritoImage} />
          <View style={styles.carritoInfo}>
            <Text style={styles.carritoName}>{item.name}</Text>
            <Text style={styles.carritoName}>Cantidad: {item.quantity}</Text>
            <Text style={styles.carritoName}>Precio: {item.price}</Text>
          </View>
          <Button title="Eliminar" onPress={() => quitarDelCarrito(index)} />
        </View>
      ))}
      <Button title="Generar Ticket" onPress={viewTicket} />
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
};

export default CartScreen;
