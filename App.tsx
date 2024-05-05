import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Components/AuthScreens/Login';
import Products from './Components/AppScreens/Products';

import ForgotPassword from './Components/AuthScreens/ForgotPassword';
import SingUp from './Components/AuthScreens/SingUp';


export type RootStackParamList = {
  // Products: { credenial: Credential };
  Products: undefined;
  Login: undefined;
  RedefinirSenha:undefined;
  Cadastro:undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    
      
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="RedefinirSenha" component={ForgotPassword} />
        <Stack.Screen name="Cadastro" component={SingUp} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
      
    
  );
};

export default App;
