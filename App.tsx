import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Components/AuthScreens/Login';
import Products from './Components/AppScreens/Products';

import ForgotPassword from './Components/AuthScreens/ForgotPassword';
import SingUp from './Components/AuthScreens/SingUp';
import Interests from './Components/AppScreens/Interests';

import { View, Alert, Image, Text, TouchableOpacity } from 'react-native';
import Header from './Components/Header';
import DetailProducts from './Components/AppScreens/DetailProduct';
import Cart from './Components/AppScreens/Cart';
import Profile from './Components/AppScreens/Profile';


export type RootStackParamList = {
  // Products: { credenial: Credential };
  Products: undefined;
  Login: undefined;
  redefine:undefined;
  SingUp:undefined;
  Interests:undefined;
  DetailProducts: { productId: number };
  Profile:undefined;
  Cart:undefined;
  
};




const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    
      
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SingUp' 
      screenOptions={{headerShown: false,headerStyle:{backgroundColor:'#8FCBD1'}, statusBarColor:'#0f0f0f',headerTintColor: '#fff',}}>
        
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="redefine" component={ForgotPassword} />
        <Stack.Screen name="Interests" component={Interests}/>
        <Stack.Screen name="Products" component={Products}
        options={{
          // contentStyle:{backgroundColor:'#f0ff00'},//muda cor do fundo todo
          headerShown: true, //apaga ou exibe o header
          headerStyle:{backgroundColor:'#8FCBD1'},
          // headerBackImageSource:0,//o botão só ta invisivel, mas ta lá ainda
          headerTitle: () => <Header/>,
          // headerRight: () => <ContextMenu />,
          
          headerBackVisible:false,//tira o o botão de voltar

        }} 
        />
        {/* PRECISO CLICAR NO ICONE DO HEADER E ELE NAVEGAR  E
        TBM PRECISO ARRUMAR O CARRINHO E PERFIL PRA FICA RESPONSIVO EM QLQR TELA */}
        <Stack.Screen name="DetailProducts" component={DetailProducts}
        options={{
        headerShown:true,
        headerTitle: () => <Header/>,
        }}/>
        <Stack.Screen name="Profile" component={Profile}
        options={{
          headerShown:true,
          headerTitle: () => <Header/>,
          }}/>

        <Stack.Screen name="Cart" component={Cart}
        options={{
        headerShown:true,
        headerTitle: () => <Header/>,
        }}/>

        {/*
        apagar esse codigo quando separar a tela d login e outras
        options={{
        headerShown:true,
        headerTitle: () => <Header/>,
        }}/> */}


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
