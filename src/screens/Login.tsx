import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../theme/appTheme';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === '' && password === '') {
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Inicio');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.logincontainer}>
      <Text style={styles.logintitle}>Inicio de Sesión</Text>
      <Text style={styles.loginlabel}>Usuario</Text>
      <TextInput
        style={styles.logininput}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.loginlabel}>Contraseña</Text>
      <TextInput
        style={styles.logininput}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
