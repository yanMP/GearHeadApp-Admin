import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importa o Drawer
import PaginaInicialAdm from "../screens/paginaInicialAdm";
import { styles } from "../config/styles";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa o ícone de Material Icons
import VerCadastrosAdm from '../screens/VerCadastrosAdm'; // Importa a página VerCadastrosAdm
import VerVeiculosAdm from '../screens/VeiculosCadastradosAdm';
import CadastrarEmpresaAdm from '../screens/CadastrarEmpresaAdm';
import HistoricoAdm from '../screens/HistoricoContasAdm';
import LogOutAdm from '../screens/LogOutAdm';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); // Cria o Drawer

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white', // Cor do fundo do Drawer
          width: 240,
        },
        headerStyle: {
          backgroundColor: 'rgb(139,0,0)', // Cor vermelha da barra superior
        },
        headerTintColor: 'white', // Cor do texto e ícones do header
        headerTitleAlign: 'center', // Alinhamento do título
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

      {/* Tela VerCadastrosAdm */}
      <Drawer.Screen 
        name="contas cadastradas" 
        component={VerCadastrosAdm} 
        options={{
          title: "Ver Cadastros de Contas", // Define o título do header
        }} 
      />

      {/* Tela VerCadastrosAdm */}
 <Drawer.Screen 
 name="últimos veículos cadastrados" 
 component={VerVeiculosAdm} 
 options={{
   title: "veículos cadastrados", // Define o título do header
 }} 
/>

 {/* Tela VerCadastrosAdm */}
 <Drawer.Screen 
 name="cadastrar empresa" 
 component={CadastrarEmpresaAdm} 
 options={{
   title: "cadastrar empresas", // Define o título do header
 }} 
/>

<Drawer.Screen 
 name="histórico de suporte" 
 component={HistoricoAdm} 
 options={{
   title: "histórico de suporte", // Define o título do header
 }} 
/>

<Drawer.Screen 
 name="sair da conta ADM" 
 component={LogOutAdm} 
 options={{
   title: "fazer LogOut", // Define o título do header
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
          component={DrawerNavigator} // Use o DrawerNavigator como componente
          options={{
            headerShown: false, // Oculta a barra superior
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
