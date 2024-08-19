import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Components/authScreens/Login';
import Products from './Components/appScreens/Products';

import ForgotPassword from './Components/authScreens/ForgotPassword';
import SignUp from './Components/authScreens/SignUp';
import Interests from './Components/appScreens/Interests';

import { View, Alert, Image, Text, TouchableOpacity } from 'react-native';
import Header from './Components/Header';
import DetailProducts from './Components/appScreens/DetailProduct';
import Cart from './Components/appScreens/Cart';
import Profile from './Components/appScreens/Profile';

import { CartProvider } from './Components/context/CartContext'; 


export type RootStackParamList = {
  // Products: { credenial: Credential };
  Products: undefined;
  Login: undefined;
  ForgotPassword:undefined;
  SignUp:undefined;
  Interests:undefined;
  DetailProducts: { productId: number };
  Profile:undefined;
  Cart:undefined;
  
};




const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    
    <CartProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='SignUp' 
        screenOptions={{headerShown: false,headerStyle:{backgroundColor:'#8FCBD1'}, statusBarColor:'#0f0f0f',headerTintColor: '#fff',}}>
          
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen  name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Interests" component={Interests}/>
          <Stack.Screen name="Products" component={Products}
          options={{
            
            headerShown: true, //apaga ou exibe o header
            headerStyle:{backgroundColor:'#8FCBD1'},
            
            headerTitle: () => <Header/>,
            
            
            headerBackVisible:false,//tira o o botão de voltar

          }} 
          />
          {/* PRECISO CLICAR NO ICONE DO HEADER E ELE NAVEGAR */}
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
    </CartProvider>
  );
};

export default App;
