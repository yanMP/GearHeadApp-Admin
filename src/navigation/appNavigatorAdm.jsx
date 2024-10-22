import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; 
import PaginaInicialAdm from "../screens/paginaInicialAdm";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import VerCadastrosAdm from '../screens/VerCadastrosAdm'; 
import VerVeiculosAdm from '../screens/VeiculosCadastradosAdm';
import CadastrarEmpresaAdm from '../screens/CadastrarEmpresaAdm';
import HistoricoAdm from '../screens/HistoricoContasAdm';
import LogOutAdm from '../screens/LogOutAdm';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); 

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgb(139,0,0)', // Cor do fundo do Drawer
          width: 240,
        },
        headerStyle: {
          backgroundColor: 'rgb(139,0,0)', // Cor vermelha da barra superior
        },
        headerTintColor: 'white', // Cor do texto e ícones do header
        headerTitleAlign: 'center', // Alinhamento do título
        drawerActiveTintColor: 'white', // Cor do item ativo
        drawerInactiveTintColor: 'white', // Cor dos itens inativos
      }}
    >
      <Drawer.Screen 
        name="Página Inicial" 
        component={PaginaInicialAdm}
        options={{
          title: "GearHead - Administrador",
          headerRight: () => (
            <Icon
              name="notifications" 
              size={25} 
              color="white" 
              onPress={() => alert('Notificações!')}
              style={{ marginRight: 15 }} 
            />
          ),
        }} 
      />

      <Drawer.Screen 
        name="contas cadastradas" 
        component={VerCadastrosAdm} 
        options={{
          title: "Ver Cadastros de Contas",
        }} 
      />

      <Drawer.Screen 
        name="últimos veículos cadastrados" 
        component={VerVeiculosAdm} 
        options={{
          title: "veículos cadastrados",
        }} 
      />

      <Drawer.Screen 
        name="cadastrar empresa" 
        component={CadastrarEmpresaAdm} 
        options={{
          title: "cadastrar empresas",
        }} 
      />

      <Drawer.Screen 
        name="histórico de suporte" 
        component={HistoricoAdm} 
        options={{
          title: "histórico de suporte",
        }} 
      />

      <Drawer.Screen 
        name="sair da conta ADM" 
        component={LogOutAdm} 
        options={{
          title: "fazer LogOut",
        }} 
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
