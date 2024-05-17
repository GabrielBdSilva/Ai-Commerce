import React, { useState } from 'react';
import { View, Text, FlatList,ScrollView, TextInput, StyleSheet, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import styles from '../../Styles/styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import stylesInterest from '../../Styles/stylesInterest';

const interestsData = [
  'Culinária',
  'Tecnologia',
  'Esportes',
  'Música',];

  const Interests = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [searchText, setSearchText] = useState('');
  
    const handleSelectInterest = (interest:any) => {
      if (selectedInterests.includes(interest)) {
        setSelectedInterests(selectedInterests.filter((i) => i !== interest));
      } else {
        setSelectedInterests([...selectedInterests, interest]);
      }
    };
  
    const handleSearch = (text:any) => {
      setSearchText(text);
    };
  
    const filteredInterests = interestsData.filter((interest) =>
      interest.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return (
        <View style={styles.Fundo}>
            
      <ScrollView >
      <View>
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
      </View>
      <Text style={styles.button}onPress={() => {navigation.navigate('Products')}}>AVANÇAR</Text>
      </ScrollView>
          </View>
        //   TAAA COMFLITTANDO O SCROLLVIEW COM O MEU FLATLISTTT!!! \(-_-)/ erro(virtualizedLists)
    );
  };

  export default Interests;

  