// Servicio.tsx
import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCarrito } from '../Navigation/CarritoContext';
import { styles } from '../../theme/appTheme';

const ServicioScreen = () => {
  const [quantities, setQuantities] = useState({});
  const navigation = useNavigation();
  const { agregarAlCarrito } = useCarrito();

  const servicios = [
    {
      id: 10,
      name: 'Bicicleta',
      image: require('./../../assets/img/servicio/bici.jpg'),
      price: 100.50,
    },
    {
      id: 11,
      name: 'Caminando',
      image: require('./../../assets/img/servicio/caminando.jpg'),
      price: 300,
    },
    {
      id: 12,
      name: 'Carro',
      image: require('./../../assets/img/servicio/carro.jpg'),
      price: 350,
    },
    {
      id: 13,
      name: 'Motocicleta',
      image: require('./../../assets/img/servicio/moto.jpg'),
      price: 325.50,
    },
    {
      id: 14,
      name: 'Recojer',
      image: require('./../../assets/img/servicio/recojer.jpg'),
      price: 0,
    },
    // Agrega más servicios según sea necesario
  ];

  const addToCart = (selectedServicio) => {
    const newServicio = {
      id: selectedServicio.id,
      name: selectedServicio.name,
      image: selectedServicio.image,
      quantity: quantities[selectedServicio.id] || 1,
      price: selectedServicio.price * (quantities[selectedServicio.id] || 1),
      type: 'servicio',
    };

    agregarAlCarrito(newServicio);
    setQuantities({ ...quantities, [selectedServicio.id]: 1 });
  };

  const increaseQuantity = (servicioId) => {
    setQuantities({
      ...quantities,
      [servicioId]: (quantities[servicioId] || 0) + 1,
    });
  };

  const decreaseQuantity = (servicioId) => {
    if (quantities[servicioId] > 1) {
      setQuantities({
        ...quantities,
        [servicioId]: quantities[servicioId] - 1,
      });
    }
  };

  const viewCart = () => {
    const cartWithQuantities = servicios.map((servicio) => ({
      ...servicio,
      quantity: quantities[servicio.id] || 1,
    }));
    navigation.navigate('Carrito', { cart: cartWithQuantities });
  };

  return (
    <ScrollView style={styles.servicioContainer}>
      {servicios.map((servicio) => (
        <View key={servicio.id} style={styles.servicioContainer1}>
          <Image source={servicio.image} style={styles.servicioImage} />
          <Text style={styles.servicioName}>{servicio.name}</Text>
          <Text style={styles.servicioPrice}>Precio: {servicio.price * (quantities[servicio.id] || 1)}</Text>
          <View style={styles.serquantityContainer}>
            <Button title="-" onPress={() => decreaseQuantity(servicio.id)} />
            <Text style={styles.serquantityText}>{quantities[servicio.id] || 1} KM</Text>
            <Button title="+" onPress={() => increaseQuantity(servicio.id)} />
          </View>
          <Button title="Agregar al carrito" onPress={() => addToCart(servicio)} />
        </View>
      ))}
      <Button title="Ver carrito" onPress={viewCart} />
      <Text></Text>
    </ScrollView>
  );
};

export default ServicioScreen;
