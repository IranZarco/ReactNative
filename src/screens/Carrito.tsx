import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cart } = route.params;

  const viewTicket = () => {
    navigation.navigate('Ticket', { cart });
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    navigation.setParams({ cart: updatedCart }); // Actualiza el parámetro de navegación
  };

  return (
    <ScrollView style={styles.carritocontainer}>
      {cart.map((item, index) => (
        <View key={index} style={styles.carritocontainer1}>
          <Image source={item.image} style={styles.carritoImage} />
          <View style={styles.carritoInfo}>
            <Text style={styles.carritoName}>{item.name}</Text>
            <Text style={styles.carritoName}>Cantidad: {item.quantity}</Text>
            <Text style={styles.carritoName}>Precio: {item.price}</Text>
          </View>
          <Button title="Eliminar" onPress={() => removeFromCart(index)} />
        </View>
      ))}
      <Button title="Generar Ticket" onPress={viewTicket} />
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
};

export default CartScreen;
