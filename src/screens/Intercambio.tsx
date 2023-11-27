import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, StyleSheet} from 'react-native';

const Intercambio = () => {
  const [cantidad, setCant] = useState('1');

  const handleQuantityChange = text => {
    const input = text.replace(/[^0-9]/g, '');
    setCant(input);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Intercambia tus videojuegos favoritos</Text>
      <Text style={styles.txtDescr}>
        Explora tu juego favorito en el cuadro combinado y descubre la increíble
        oferta que tenemos para ti. ¿Cuánto vale tu experiencia de juego?
        ¡Descúbrelo ahora!
      </Text>
      <TextInput
        style={styles.inputCant}
        value={cantidad}
        keyboardType="numeric"
        onChangeText={handleQuantityChange}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  txtDescr: {
    fontSize: 14,
    textAlign: 'justify',
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
  picker: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default Intercambio;
