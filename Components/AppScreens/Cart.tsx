import React from 'react';
import{View,Text} from 'react-native';
import styles from '../../Styles/styles';


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Cart = ({navigation}:NativeStackScreenProps<RootStackParamList>) => {


  return (
    <View>
      
      <Text>Carrinho Terá todos itens, e com base neles uma sessão d produtos recomendados pela IA</Text>
      
      <Text style={styles.buttonDt} onPress={() => {navigation.navigate('Login')}}>Voltar a Tela de Login</Text>

      
    </View>
  );
};

export default Cart;