import React from 'react';
import{View,Text,TextInput,Button, StyleSheet, ViewBase, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../../Styles/styles';

const ForgotPassword = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
  const [email,setEmail] = React.useState('');

  const handleRedefinir = () => {
    if(email.length > 5 ) {
        console.log('email de redefinição enviado!');
        alert('email de redefinição enviado!');
        navigation.navigate('Login');
    } else {
        alert('Digite um Email valido');
    }
}

  return (
    
        <View style={styles.Fundo}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Redefinir Senha </Text>
    <View style={styles.container}>
      
    <Text style={{width:250, marginBottom:20}} >
    Para recuperar sua Conta iremos enviar um email para voce redefinir sua senha
    </Text>

        <Text style={styles.inputText} >Email</Text>
        <TextInput 
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize='none'
            placeholder="Digite Seu Email"
        />

    </View>
    

    <Text style={styles.buttonRedef} onPress={handleRedefinir}>ENVIAR</Text>
    <Text style={styles.button} onPress={() => {navigation.navigate('Login')}}>VOLTAR</Text>

    </ScrollView>
        </View>
);
}

export default ForgotPassword;

