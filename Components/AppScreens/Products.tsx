import React from 'react';
import{View,Text,TextInput,Button, StyleSheet, ViewBase, ScrollView} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const Products = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {


  return (
    <View /*style={styles.container} */>
      
      <Text onPress={() => {navigation.navigate('DetailProducts')}} >Produtos</Text>
      
    </View>
  );
};

export default Products;