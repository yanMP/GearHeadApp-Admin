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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Cor de fundo clara para a página
  },
  textLogOut: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonLogOut: {
    backgroundColor: 'rgb(139,0,0)', // Cor vermelha do botão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonTextLogOut: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
