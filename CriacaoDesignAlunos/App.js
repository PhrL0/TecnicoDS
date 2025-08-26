import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importa telas
import CriacaoInterface from './screens/CriacaoInterface';
import EstruturaLayout from './screens/EstruturaLayout';
import TiposLayout from './screens/TipoLayout';
import GerenciadorLayout from './screens/GerenciadorLayout';
import ComponentesTela from './screens/ComponentesTela';
import Modall from './screens/Modall';
import BarraAcao from './screens/BarraAcao';





const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="2. Criação de Interface">
        <Drawer.Screen name="2. Criação de Interface" component={CriacaoInterface} />
        <Drawer.Screen name="2.1.1 Estrutura" component={EstruturaLayout} />
        <Drawer.Screen name="2.1.1 Tipo Layout" component={TiposLayout} />
        <Drawer.Screen name="2.1.1 Gerenciador Layout" component={GerenciadorLayout} />
        <Drawer.Screen name="2.1.1 Componentes Tela" component={ComponentesTela} />
        <Drawer.Screen name="2.1.1 Modal" component={Modall} />
        <Drawer.Screen name="2.1.1 Modal" component={BarraAcao} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
