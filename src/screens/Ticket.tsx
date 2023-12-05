// Ticket.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';

const TicketScreen = () => {
  const route = useRoute();
  const { carrito } = route.params;
  const [fechaHora, setFechaHora] = useState('');
  const [totalPagar, setTotalPagar] = useState(0);

  useEffect(() => {
    // Obtener la fecha y hora actual al entrar al componente
    const fechaHoraActual = new Date();
    const formatoFechaHora = fechaHoraActual.toLocaleString('es-MX', {
      dateStyle: 'long',
      timeStyle: 'short',
    });

    setFechaHora(formatoFechaHora);

    // Calcular el total a pagar
    const total = carrito.reduce((accumulator, item) => accumulator + item.price, 0);
    setTotalPagar(total);
  }, [carrito]);

  const productos = carrito.filter(item => item.type === 'producto');
  const servicios = carrito.filter(item => item.type === 'servicio');

  return (
    <ScrollView style={styles.itemcontainer}>
      <Text style={styles.itemName}>-----------------------------------------------------------</Text>
      <Text style={styles.itemtitle}>UTVT</Text>
      <Text style={styles.itemName}>-----------------------------------------------------------</Text>
      <Text style={styles.itemtitle}>Ticket</Text>
      <Text style={styles.itemName}>-----------------------------------------------------------</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.date}>{fechaHora}</Text>
        <Text style={styles.itemName}>-----------------------------------------------------------</Text>
        <Text style={styles.itemtitle}>Productos</Text>
        {productos.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemText}>Cantidad: {item.quantity}</Text>
            <Text style={styles.itemText}>Precio: ${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemtitle}>Servicios</Text>
        {servicios.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemText}>Cantidad: {item.quantity}</Text>
            <Text style={styles.itemText}>Precio: ${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.total}>Total a Pagar: ${totalPagar.toFixed(2)}</Text>
      </View>
      <Text style={styles.itemName}>-----------------------------------------------------------</Text>
      <Text style={styles.itemtitle}>GRACIAS POR SU COMPRA 😎</Text>
      <Text style={styles.itemName}>-----------------------------------------------------------</Text>
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
};

export default TicketScreen;
