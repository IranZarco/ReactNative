import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ProductItem = ({juego, onAddToCart}) => {
  const [cantidad, setCantidad] = useState("1");

  const handleQuantityChange = (text) => {
    // Validar que la entrada sea un número positivo
    const input = text.replace(/[^0-9]/g, "");
    setCantidad(input);
  };

  return (
    <View style={styles.productContainer}>
      <Image
        source={juego.imagen}
        style={{width: 300, height: 200, aspectRatio: 1}}
      />
      <Text>{juego.name}</Text>
      <Text>${juego.precio}</Text>
      <TextInput
        style={styles.inputCant}
        value={cantidad}
        keyboardType="numeric"
        onChangeText={handleQuantityChange}
      />
      <TouchableOpacity
        onPress={() => onAddToCart(juego)}
        style={styles.btnAdd}>
        <Text style={{color: 'white'}}>Añadir al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

const CatalogoJuegos = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Cyberpunk 2077',
      precio: 1200,
      imagen: require('./../../assets/games/cyberpunk2077.jpg'),
      cantidad: 1,
    },
    {
      id: 2,
      name: 'Left 4 Dead 2',
      precio: 300,
      imagen: require('./../../assets/games/l4d2.jpg'),
      cantidad: 1,
    },
    {
      id: 3,
      name: 'Minecraft',
      precio: 500,
      imagen: require('./../../assets/games/mc.jpg'),
      cantidad: 1,
    },
    {
      id: 4,
      name: 'Call of Duty: Modern Warfare 3',
      precio: 500,
      imagen: require('./../../assets/games/modern-warfare-3.jpg'),
      cantidad: 1,
    },
  ];

  const anadirCarrito = juego => {
    setCart([...cart, juego]);
  };

  const borrarItemCarrito = itemId => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);
  };

  const reset = () => {
    setCart([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos Disponibles</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductItem juego={item} onAddToCart={anadirCarrito} />
        )}
      />

      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <Image source={item.imagen} style={styles.cartItemImage} />
            <Text>{item.name}</Text>
            <Text>
              ${item.precio} x {item.cantidad}
            </Text>
            <TouchableOpacity onPress={() => borrarItemCarrito(item.id)}>
              <Text style={styles.btnDel}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      <TouchableOpacity onPress={reset} style={{}}>
        <Text style={styles.btnReset}>Vaciar el carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  productContainer: {
    marginBottom: 20,
  },
  productImage: {
    width: 300,
    height: 200,
    aspectRatio: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cartItemImage: {
    width: '10%',
    height: '10%',
    aspectRatio: 1,
  },

  btnAdd: {
    alignItems: 'center',
    backgroundColor: '#3077FC',
    padding: 10,
    borderRadius: 25,
  },

  btnDel: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },

  btnReset: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  inputCant: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 8,
  },
});

export default CatalogoJuegos;
