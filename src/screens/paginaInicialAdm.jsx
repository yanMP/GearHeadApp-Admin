import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Importando a biblioteca de ícones
import { styles } from '../config/styles';

const UniformButton = ({ title, onPress, iconName }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <MaterialCommunityIcons name={iconName} size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo à Mecânica, chefe!</Text>
      <View style={styles.buttonContainer}>
        <UniformButton
          title="Ver cadastros de contas"
          onPress={() => navigation.navigate('contas cadastradas')}
          iconName="account"
        />
        <UniformButton
          title="Ver cadastros de veículos"
          onPress={() => navigation.navigate('últimos veículos cadastrados')}
          iconName="car"
        />
        <UniformButton
          title="Cadastrar empresa"
          onPress={() => navigation.navigate('cadastrar empresa')}
          iconName="office-building"
        />
        <UniformButton
          title="Ver Histórico"
          onPress={() => navigation.navigate('histórico de suporte')}
          iconName="history"
        />
      </View>
    </View>
  );
}


