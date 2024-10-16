import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function CadastrarEmpresa() {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastro = () => {
    if (nomeEmpresa.length < 4) {
      Alert.alert('Erro', 'O nome da empresa deve ter pelo menos 4 letras.');
      return;
    }

    console.log('Nome da Empresa:', nomeEmpresa);
    console.log('CEP:', cep);
    console.log('Endereço:', endereco);
    console.log('Telefone:', telefone);
    alert('Empresa cadastrada com sucesso!');
  };

  // Função para formatar o telefone
  const formatarTelefone = (value) => {
    // Remove caracteres não numéricos
    const cleanValue = value.replace(/\D/g, '');

    // Formata o telefone de acordo com a quantidade de dígitos
    if (cleanValue.length <= 2) {
      return cleanValue;
    }
    if (cleanValue.length <= 6) {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2)}`;
    }
    return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7, 11)}`;
  };

  const handleTelefoneChange = (text) => {
    // Aplica a formatação no telefone
    setTelefone(formatarTelefone(text));
  };

  // Função para formatar o CEP
  const formatarCep = (value) => {
    // Remove caracteres não numéricos
    const cleanValue = value.replace(/\D/g, '');

    // Formata o CEP
    if (cleanValue.length <= 5) {
      return cleanValue;
    }
    return `${cleanValue.slice(0, 5)}-${cleanValue.slice(5, 8)}`;
  };

  const handleCepChange = (text) => {
    // Aplica a formatação no CEP
    setCep(formatarCep(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Empresa</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da Empresa"
        value={nomeEmpresa}
        onChangeText={setNomeEmpresa}
      />
      {nomeEmpresa.length > 0 && nomeEmpresa.length < 4 && (
        <Text style={styles.errorText}>O nome da empresa deve ter pelo menos 4 letras.</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={handleCepChange} // Aplicando a nova função de formatação
        keyboardType="numeric"
        maxLength={10} // Limita a entrada ao tamanho máximo do CEP formatado
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={handleTelefoneChange} // Permite a modificação sem problemas
        keyboardType="phone-pad"
        maxLength={15} // Limita a entrada ao tamanho máximo
      />

      <Button title="Cadastrar" color="rgb(139,0,0)" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});
