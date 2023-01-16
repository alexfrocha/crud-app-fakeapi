import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Index from './src/Home';
import RepositoriosScreen from './src/Repositorios';
import CriarRepositorio from './src/CriarRepositorio';
import EditarRepositorio from './src/EditarRepositorio';

const Stack = createStackNavigator()

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {elevation: 0},
      cardStyle: {backgroundColor: '#fff'}
    }}>
      <Stack.Screen name='Inicial' options={{title: 'Página Inicial', headerTitleAlign: 'center'}} component={Index} />
      <Stack.Screen name='Repositorios' options={{title: 'Repositórios'}} component={RepositoriosScreen} />
      <Stack.Screen name='CriarRepositorio' options={{title: 'Criar Repositório'}} component={CriarRepositorio} />
      <Stack.Screen name='EditarRepositorio' options={{title: 'Editar Repositório'}} component={EditarRepositorio} />
    </Stack.Navigator>
  </NavigationContainer>
}
