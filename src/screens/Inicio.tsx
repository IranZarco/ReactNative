import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

const Inicio = ({navigation}) => {
  return (
    <ScrollView style={styles.pantalla}>
      <SafeAreaView style={styles.col}>
        {/* Cabecera */}
        <SafeAreaView style={styles.filasDeDos}>
          <SafeAreaView>
            <Image
              source={require('./../../assets/LogoBraanro.png')}
              style={styles.imgLogo}
              resizeMode="contain"
            />
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.title}>Tienda de videojuegos</Text>
          </SafeAreaView>
        </SafeAreaView>

        <View style={styles.seperator} />
        <View style={styles.filasDeDos}>
          <Image
            source={require('./../../assets/pexels-jeshootscom-442576.jpg')}
            style={styles.imgMain}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.contDest}>
          Contamos con un amplio catálogo de videojuegos.
        </Text>
        <TouchableOpacity
          style={styles.mainBtn}
          onPress={() => navigation.navigate('Catálogo de juegos')}>
          <Text style={styles.btnText}>Explorar</Text>
        </TouchableOpacity>
        <Text style={styles.contDest}>
          Intercambia tus videojuegos favoritos
        </Text>
        <TouchableOpacity
          style={styles.mainBtn}
          onPress={() => navigation.navigate('Intercambio')}>
          <Text style={styles.btnText}>Intercambio</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: '#6FEFDC',
  },

  col: {
    flexDirection: 'column',
    flex: 1,
  },

  col2: {
    flexDirection: 'column',
    flex: 1,
  },

  filas: {
    flex: 1,
    flexDirection: 'row',
  },

  filasDeDos: {
    flex: 2,
    flexDirection: 'row',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 35,
    // textAlign: 'center',
    // alignSelf: 'center',
  },

  smImg: {
    height: 150,
    width: 200,
  },

  imgLogo: {
    height: 100,
    width: '100%',
    aspectRatio: 1,
  },

  imgMain: {
    height: 400,
    width: '100%',
    aspectRatio: 1,
  },

  img: {
    width: 200,
    height: 200,
  },

  contDest: {
    textAlign: 'justify',
    fontSize: 20,
    margin: 10,
    padding: 15,
  },

  txtCuadro2: {
    color: 'green',
    textAlign: 'center',
  },

  seperator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 1,
  },

  mainBtn: {
    alignItems: 'center',
    backgroundColor: '#3077FC',
    padding: 10,
    borderRadius: 25,
  },

  btnText: {
    color: 'white',
  },
});

export default Inicio;
