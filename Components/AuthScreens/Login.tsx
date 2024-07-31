import React from 'react';
import{View,Text,TextInput,Button, StyleSheet, ViewBase, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../../Styles/styles';
import client from '../services/api';




//email e senha estaticos
// const Email = 'gabriel.sites3200@gmail.com';
// const Password = '12345';


const Login= ({navigation}: NativeStackScreenProps<RootStackParamList>) => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const handleLogin = async () => {
      try {
        const response = await client.get('/users');
        const users = response.data;

        const User = users.find(user => user.email === email);
        if(User && User.password === password){
          console.log('login realizado!');
          navigation.navigate('Products');
        }else{
          alert('Email ou senha incorretos')
        }
      }catch(error){
        console.error('Deu esse erro -_-: ', error);
        alert('Erro ao realizar login, tente novamente');
      }
        // if(email === Email && password === Password) {
        //     console.log('Login realizado com sucesso!');
        //     navigation.navigate('Products');
        // } else {
        //     alert('Email ou senha invalidos');
        // }
    }
    return (
        //scrollview pra tela n quebrar quando clica no input
            <View style={styles.Fundo}>
        <ScrollView showsVerticalScrollIndicator={false}>
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


            <Text style={styles.forgotAndSingup} onPress={() => {navigation.navigate('ForgotPassword')}}>Esqueci a senha</Text>
            <Text style={styles.forgotAndSingup} onPress={() => {navigation.navigate('SignUp')}}>Não tenho conta</Text>
        </View>
        <Text style={styles.button} onPress={handleLogin}>LOGAR</Text>

            {/* <Button title="Entrar" color="#BDE1E4"  onPress={handleLogin}/> */}

        </ScrollView>
            </View>
    );


}
export default Login;
