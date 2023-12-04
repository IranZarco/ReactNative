import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';

const TicketScreen = () => {
  const route = useRoute();
  const { cart } = route.params;
  const [currentDate, setCurrentDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    setCurrentDate(formattedDate);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const goToServicio = () => {
    navigation.navigate('Servicio');
  };

  return (
    <ScrollView style={styles.itemcontainer}>
      <Text style={styles.itemtitle}>UTVT</Text>
      <Text style={styles.itemtitle1}>----------------------------------------------</Text>
      <Text style={styles.itemtitle}>Detalle del Ticket</Text>
      <Text style={styles.itemtitle1}>----------------------------------------------</Text>
      <Text style={styles.date}>{currentDate}</Text>
      <Text style={styles.itemtitle1}>----------------------------------------------</Text>
      {cart.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemText}>Cantidad: {item.quantity}</Text>
          <Text style={styles.itemText}>Precio: {item.price}</Text>
        </View>
      ))}
      <Text style={styles.itemtitle1}>----------------------------------------------</Text>
      <Text style={styles.itemtitle}>Gracias por tu compra</Text>
      <Text style={styles.itemtitle1}>----------------------------------------------</Text>
      <Button title="Ir a Servicio" onPress={goToServicio} />
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
};

export default TicketScreen;
