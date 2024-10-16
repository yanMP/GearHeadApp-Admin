import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LogOutAdm() {
  return (
    <View style={styles.containerLogOut}>
      <Text style={styles.textLogOut}>Deseja fazer LogOut?</Text>
      <TouchableOpacity style={styles.buttonLogOut}>
        <Text style={styles.buttonTextLogOut}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogOut: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    backgroundColor: '#fff',  // Fundo branco
  },
  textLogOut: {
    fontSize: 20,
    marginBottom: 20,         // Espaçamento entre texto e botão
    textAlign: 'center',      // Centraliza o texto
  },
  buttonLogOut: {
    backgroundColor: 'rgb(139,0,0)',   // Cor de fundo vermelha
    paddingVertical: 10,      // Altura do botão
    paddingHorizontal: 20,    // Largura do botão
    borderRadius: 5,          // Bordas arredondadas
  },
  buttonTextLogOut: {
    color: 'white',           // Cor do texto do botão
    fontSize: 18,
  },
});
