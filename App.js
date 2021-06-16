import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import TouchId from 'react-native-touch-id';

export default function App() {
  TouchId.authenticate()
    .then(() => {
      Alert.alert('Autenticaçao realizada com sucesso!');
    }).catch(() => {
      Alert.alert('A autenticação falhou. Por favor, digite sua senha!');
    });
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#444" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#444" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19181f'
  },
  input: {
    width: 200,
    height: 45,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#0737D5',
    marginBottom: 10,
    padding: 10,
    fontSize: 18
  },
  button: {
    width: 200,
    height: 45,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#0737D5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    color: "#FFF"
  }
});

