import React from 'react';
import{View,Text,TextInput,Button, StyleSheet, ViewBase, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../../styles';



/* //Login utilizando a api
const handleLogin = async () => {
    try {
      const response = await fetch('meu endpoint aqui', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        
        console.log('Login realizado com sucesso!');
        navigation.navigate('Products');
      } else {
        
        alert('Email ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      alert('Erro ao realizar login. Tente novamente.');
    }
  }; 
*/

export type Credential = {
    email: string;
    //password: string;
  };


//email e senha estaticos
const Email = 'rm@fiap.com.br';
const Password = '@Fiap123';


const Login= ({navigation}: NativeStackScreenProps<RootStackParamList>) => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const handleLogin = () => {
        if(email === Email && password === Password) {
            console.log('Login realizado com sucesso!');
            navigation.navigate('Products');
        } else {
            alert('Email ou senha invalidos');
        }
    }
    return (
        //scrollview pra tela n quebrar quando clica no input
            <View style={styles.Fundo}>
        <ScrollView >
            <Text style={styles.title}>Login</Text>
        <View style={styles.container}>

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

            <Text style={styles.inputText} >Senha</Text>
            <TextInput 
                
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Digite Sua Senha"
                secureTextEntry={true}
            />


            <Text style={styles.forgotAndSingup} onPress={() => {navigation.navigate('redefine')}}>Esqueci a senha</Text>
            <Text style={styles.forgotAndSingup} onPress={() => {navigation.navigate('SingUp')}}>Não tenho conta</Text>
        </View>
        <Text style={styles.button} onPress={handleLogin}>LOGAR</Text>

            {/* <Button title="Entrar" color="#BDE1E4"  onPress={handleLogin}/> */}

        </ScrollView>
            </View>
    );


}
export default Login;
