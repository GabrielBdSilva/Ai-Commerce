import React from 'react';
import{View,Text,TextInput,Button, StyleSheet, ViewBase, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../../Styles/styles';
import client from '../services/api';



const SignUp= ({navigation}: NativeStackScreenProps<RootStackParamList>) => {

  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [cpf,setCpf] = React.useState('');
  const [password,setPassword] = React.useState('');


  const handleCadastro = async () => {
      if(name.length >= 3  && email.length >= 5 && cpf.length  >= 11 && password.length >= 5) {
        try{
            const response = await client.post('/users',{
                name,
                email,
                cpf,
                password
            });
            
            console.log('Cadastro realizado com sucesso!', response.data);
            navigation.navigate('Interests');
        } catch (error){
            console.error('erro ao registrar usuuario: ',error);
            alert('Erro ao cadastrar! Tente novamente!');
        }
        
      } else {
          alert('Preencha todos os campos corretamente');
      }
  }
  return (
      
          <View style={styles.Fundo}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Text 
          style={{textAlign:'center', width:320, fontSize:50, fontWeight:'bold', marginTop:50, marginBottom:30,color:'#fff',}}>
          CADASTRO</Text>
      <View style={styles.container}>
          <Text style={styles.inputText} >Nome</Text>
          <TextInput 
              style={styles.input}
              value={name}
              onChangeText={setName}
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize='none'
              placeholder="Digite Seu Nome"
          />

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

          <Text style={styles.inputText} >CPF</Text>
          <TextInput 
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
              autoCorrect={false}
              placeholder="Digite Seu CPF"
          />

          <Text style={styles.inputText} >Senha</Text>
          <TextInput 
              
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Digite Sua Senha"
              secureTextEntry={true}
          />


          <Text style={styles.forgotAndSignUp} onPress={() => {navigation.navigate('Login')}}>Já tenho conta</Text>
      </View>
      <Text style={styles.button} onPress={handleCadastro}>CADASTRAR</Text>


      </ScrollView>
          </View>
  );


}
export default SignUp;

