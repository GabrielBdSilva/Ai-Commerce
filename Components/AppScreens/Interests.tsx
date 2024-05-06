import React, { useState } from 'react';
import { View, Text, FlatList,ScrollView, TextInput, StyleSheet, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import styles from '../../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';

const interestsData = [
  'Culinária',
  'Tecnologia',
  'Esportes',
  'Música',];

  const Interests = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [searchText, setSearchText] = useState('');
  
    const handleSelectInterest = (interest) => {
      if (selectedInterests.includes(interest)) {
        setSelectedInterests(selectedInterests.filter((i) => i !== interest));
      } else {
        setSelectedInterests([...selectedInterests, interest]);
      }
    };
  
    const handleSearch = (text) => {
      setSearchText(text);
    };
  
    const filteredInterests = interestsData.filter((interest) =>
      interest.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return (
        <View style={styles.Fundo}>
            
      <ScrollView >
      
      <Text 
          style={{textAlign:'center', width:320, fontSize:50, fontWeight:'bold', marginTop:40, marginBottom:20,color:'#fff',}}>
          INTERESSES</Text>
          <Text style={{width:250, marginBottom:20, color: "#fff",textAlign:'center',alignSelf:'center'}} >
          Nos diga o que você busca para personalizarmos seu feed
    </Text>
        
      <View style={styles.container}>
      <Text style={styles.inputText} >Procurar</Text>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar interesse"
            onChangeText={handleSearch}
            value={searchText}
          />

          <Text style={stylesInterest.selectedInterestsLabel}>Interesses Selecionados:</Text>
          {selectedInterests.length > 0 ? (
              
              <FlatList
              data={selectedInterests}
              renderItem={({ item }) => (
                  
                  <Text style={stylesInterest.selectedInterestItemText}>{item}</Text>
                
              )}
              keyExtractor={(item) => item}
              horizontal={true}
              />
          ) : (
              <Text style={stylesInterest.noSelectedInterestsText}>Nenhum interesse selecionado.</Text>
          )}
        
        {/* Tenho q quebrar um item do lado do outro e tambem o interesse quando passa do limite da tela*/}
          <FlatList 
            data={filteredInterests}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  stylesInterest.interestItem,
                  selectedInterests.includes(item) ? stylesInterest.interestItemSelected : {},
                ]}
                onPress={() => handleSelectInterest(item)}
              >
                <Text style={stylesInterest.interestItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            
          />
        
        
      </View>
      <Text style={styles.button}onPress={() => {navigation.navigate('Products')}}>AVANÇAR</Text>
      </ScrollView>
          </View>
        //   TAAA COMFLITTANDO O SCROLLVIEW COM O MEU FLATLISTTT!!! (virtualizedLists)
    );
  };

  export default Interests;

  const stylesInterest = StyleSheet.create({
    
    
    
    
    interestItem: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      marginBottom: 10,
      width:100,
      height:100,
    },
    interestItemSelected: {
      backgroundColor: '#f0f0f0',
    },
    interestItemText: {
      fontSize: 16,
    },
    
    selectedInterestsLabel: {
      fontSize: 17,
      fontWeight: '500',
      alignSelf:'flex-start'

    },

    selectedInterestItemText: {
        fontSize: 13,
        marginRight:20,
        marginBottom:20,
      },
      noSelectedInterestsText: {
        fontSize: 16,
        color: '#ccc',
      },
    });