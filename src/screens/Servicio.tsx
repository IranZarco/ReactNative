import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';

const ServicioScreen = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigation = useNavigation();

  const servicios = [
    {
      idSser: 10,
      nombre: 'bicicleta',
      imagen: require('./../../assets/img/servicio/bisi.jpg'),
      precio: 150,
    },
  ];

  const increaseQuantity = (serviceId) => {
    setQuantities({
      ...quantities,
      [serviceId]: (quantities[serviceId] || 0) + 1,
    });
  };

  const decreaseQuantity = (serviceId) => {
    if (quantities[serviceId] > 1) {
      setQuantities({
        ...quantities,
        [serviceId]: quantities[serviceId] - 1,
      });
    }
  };

  const navigateToTicketSer = () => {
    navigation.navigate('TicketSer', { cart });
  };

  return (
    <ScrollView style={styles.productContainer}>
      {servicios.map((service) => (
        <View key={service.idSser} style={styles.productContainer1}>
          <Image source={service.imagen} style={styles.productImage} />
          <Text style={styles.productName}>{service.nombre}</Text>
          <Text style={styles.productPrice}>Precio: {service.precio * (quantities[service.idSser] || 1)}</Text>
          <View style={styles.quantityContainer}>
            <Button title="-" onPress={() => decreaseQuantity(service.idSser)} />
            <Text style={styles.quantityText}>{quantities[service.idSser] || 1} KM</Text>
            <Button title="+" onPress={() => increaseQuantity(service.idSser)} />
          </View>
          <Button title="Generar Ticket" onPress={navigateToTicketSer} />
        </View>
      ))}
    </ScrollView>
  );
};

export default ServicioScreen;
