import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

const veiculos = [
  {
    id: '1',
    modelo: 'Fusca',
    marca: 'Volkswagen',
    ano: '1975',
    placa: 'ABC-1234',
    dono: 'João Silva',
  },
  {
    id: '2',
    modelo: 'Civic',
    marca: 'Honda',
    ano: '2020',
    placa: 'XYZ-5678',
    dono: 'Maria Oliveira',
  },
  {
    id: '3',
    modelo: 'Mustang',
    marca: 'Ford',
    ano: '2022',
    placa: 'MST-9012',
    dono: 'Carlos Pereira',
  },
  {
    id: '4',
    modelo: 'Corolla',
    marca: 'Toyota',
    ano: '2021',
    placa: 'COR-3456',
    dono: 'Ana Costa',
  },
];

export default function VerVeiculosAdm() {
  const [searchQuery, setSearchQuery] = useState('');

  // Função para filtrar os veículos com base na pesquisa
  const filteredVeiculos = veiculos.filter(
    (veiculo) =>
      veiculo.modelo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veiculo.marca.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veiculo.dono.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veiculo.placa.toLowerCase().includes(searchQuery.toLowerCase()) // Adicionando filtro por placa
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.modelo}>{item.modelo}</Text>
      <Text>Marca: {item.marca}</Text>
      <Text>Ano: {item.ano}</Text>
      <Text>Placa: {item.placa}</Text>
      <Text>Donos: {item.dono}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ver Cadastros dos Veículos</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar por modelo, marca, dono ou placa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredVeiculos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  modelo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
