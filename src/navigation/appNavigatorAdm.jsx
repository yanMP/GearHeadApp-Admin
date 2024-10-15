import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importa o Drawer
import PaginaInicialAdm from "../screens/paginaInicialAdm";
import { styles } from "../config/styles";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa o ícone de Material Icons

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); // Cria o Drawer

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white', // Define a cor do fundo do Drawer como branco
          width: 240,               // Define a largura do Drawer
        },
        headerStyle: {
          backgroundColor: 'rgb(139,0,0)',    // Cor vermelha na barra superior (header)
        },
        headerTintColor: 'white',     // Cor dos ícones e texto na barra superior
        headerTitleAlign: 'center',   // Alinhamento do título
      }}
    >
      <Drawer.Screen 
        name="Página Inicial" 
        component={PaginaInicialAdm}
        options={{
          title: "GearHead - Administrador",
          headerRight: () => (
            <Icon
              name="notifications"      // Nome do ícone de sininho
              size={25}                 // Tamanho do ícone
              color="white"             // Cor do ícone
              onPress={() => alert('Notificações!')} // Ação ao clicar no sininho
              style={{ marginRight: 15 }} // Margem para distanciar do canto
            />
          ),
        }} 
      />
      {/* Adicione outras telas aqui, se necessário */}
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator} // Use o DrawerNavigator como componente
          options={{
            headerShown: false, // Oculta a barra superior aqui
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
