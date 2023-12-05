// Producto.tsx
import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCarrito } from '../Navigation/CarritoContext';
import { styles } from '../../theme/appTheme';

const ProductScreen = () => {
  const { agregarAlCarrito } = useCarrito();
  const navigation = useNavigation();

  const [quantities, setQuantities] = useState({});
  const products = [
    {
      id: 1,
      name: 'Audifonos Gamer, Auriculares con Microfono',
      image: require('./../../assets/img/dispositivos/audifonos.jpg'),
      price: 59.83,
    },
    {
      id: 2,
      name: 'MTQ Altavoces PC Sobremesa, Bocinas para PC, Altavoces para Computadora',
      image: require('./../../assets/img/dispositivos/bocinas.jpg'),
      price: 300,
    },
    {
      id: 3,
      name: 'Zopsc 1080P Computadora de Escritorio Cámara HD Cámara Web USB Cámara Web',
      image: require('./../../assets/img/dispositivos/camara.jpg'),
      price: 238,
    },
    {
      id: 4,
      name: 'Apple 2022 Laptop MacBook Air con Chip M2',
      image: require('./../../assets/img/dispositivos/lap.jpg'),
      price: 24979,
    },
    {
      id: 5,
      name: 'HUAWEI MateBook D 15 Ryzen 7 5700U 16GB + 512, 15.6 Pulgadas, Fast Charging 65W, Windows 11 Home',
      image: require('./../../assets/img/dispositivos/laptop.jpg'),
      price: 14999.,
    },
    {
      id: 6,
      name: 'Logitech G502 Hero Mouse Gaming con Cable, Sensor Hero 25K, LIGHTSYNC RGB',
      image: require('./../../assets/img/dispositivos/mose.jpg'),
      price: 934,
    },
    {
      id: 7,
      name: 'KEDIERS Gabinete PC ATX Gaming Carcasa para PC Carcasa de Cristal Templado para Juegos (570)',
      image: require('./../../assets/img/dispositivos/pc.jpg'),
      price: 3189,
    },
    {
      id: 8,
      name: 'HP Teclado con Cable 150, USB, en Español, Windows/Mac OS, Negro (664R5AA)',
      image: require('./../../assets/img/dispositivos/teclado.jpg'),
      price: 229,
    },
    {
      id: 9,
      name: 'TP-Link WiFi 6 AX3000 WiFi Router - 802.11ax Router, Gigabit, Dual Band, OFDMA, MU-MIMO, Funciona con Alexa (Archer AX53)',
      image: require('./../../assets/img/dispositivos/wifi.jpg'),
      price: 1142,
    },
  ];

  const addToCart = (selectedProduct) => {
    const newProduct = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      quantity: quantities[selectedProduct.id] || 1,
      price: selectedProduct.price * (quantities[selectedProduct.id] || 1),
      type: 'producto',
    };

    agregarAlCarrito(newProduct);
    setQuantities({ ...quantities, [selectedProduct.id]: 1 });
  };

  const increaseQuantity = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: (quantities[productId] || 0) + 1,
    });
  };

  const decreaseQuantity = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities({
        ...quantities,
        [productId]: quantities[productId] - 1,
      });
    }
  };

  return (
    <ScrollView style={styles.productContainer}>
      {products.map((producto) => (
        <View key={producto.id} style={styles.productContainer1}>
          <Image source={producto.image} style={styles.productImage} />
          <Text style={styles.productName}>{producto.name}</Text>
          <Text style={styles.productPrice}>Precio: {producto.price * (quantities[producto.id] || 1)}</Text>
          <View style={styles.quantityContainer}>
            <Button title="-" onPress={() => decreaseQuantity(producto.id)} />
            <Text style={styles.quantityText}>{quantities[producto.id] || 1}</Text>
            <Button title="+" onPress={() => increaseQuantity(producto.id)} />
          </View>
          <Button title="Agregar al carrito" onPress={() => addToCart(producto)} />
        </View>
      ))}
      <Text></Text>
      <Button title="Ir a Servicio" onPress={() => navigation.navigate('Servicio')} />
      <Text></Text>
      <Text></Text>
    </ScrollView>
  );
};

export default ProductScreen;
  
