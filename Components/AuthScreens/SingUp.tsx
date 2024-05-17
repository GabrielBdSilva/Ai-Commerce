import React from 'react';
import{View,Text,TextInput,Button, StyleSheet, ViewBase, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../../Styles/styles';



const SingUp= ({navigation}: NativeStackScreenProps<RootStackParamList>) => {

  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [cpf,setCpf] = React.useState('');
  const [password,setPassword] = React.useState('');

  const handleCadastro = () => {
      if(name.length >= 3  && email.length >= 5 && cpf.length  >= 11 && password.length >= 5) {
          console.log('Cadastro realizado com sucesso!');
          navigation.navigate('Interests');

        
      } else {
          alert('Preencha todos os campos corretamente');
      }
  }
  return (
      
          <View style={styles.Fundo}>
      <ScrollView >
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


          <Text style={styles.forgotAndSingup} onPress={() => {navigation.navigate('Login')}}>Já tenho conta</Text>
      </View>
      <Text style={styles.button} onPress={handleCadastro}>CADASTRAR</Text>


      </ScrollView>
          </View>
  );


}
export default SingUp;

