import React from 'react';
import {StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity} from 'react-native';
import { styles } from '../../theme/appTheme';

const Inicio = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text></Text>
        <TouchableOpacity
          style={styles.botonI}
          onPress={() => navigation.navigate('Login')}>
          <Text>👤</Text>
        </TouchableOpacity>
        <Text></Text>
        <View>
          <Image
            source={require('./../../assets/img/intro.jpg')}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
        <Text></Text>
        <TouchableOpacity
          style={styles.botonN}
          onPress={() => navigation.navigate('Producto')}>
          <Text style={styles.text1}>Rentar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box1}>
        <Text style={styles.title}>Creadores</Text>
        <Text style={styles.text}>Eduardo Martinez Quiroz</Text>
        <Text style={styles.text}>Areli de Jesus Flores</Text>
        <Text style={styles.text}>Iran Cardenas Zarco</Text>
      </View>
    </View>
  );
};

export default Inicio;