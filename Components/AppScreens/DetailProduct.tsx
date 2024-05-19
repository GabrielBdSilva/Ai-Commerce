import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

import { RouteProp, useRoute } from '@react-navigation/native';
import styles from '../../Styles/styles';
import client from '../services/api';


type DetailProductsRouteProp = RouteProp<RootStackParamList, 'DetailProducts'>;

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  detail:string;
};
const DetailProducts = ({navigation}:NativeStackScreenProps<RootStackParamList>) => {
  const route = useRoute<DetailProductsRouteProp>();
  const {productId} = route.params;
  const [product,setProducts] =useState<Product | null>(null);

  const fetchProductDetails = async () => {
    
      const response = await client.get(`/products/${productId}`);
      setProducts(response.data);
   
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const addOnCart = () =>{
    //LOGICA  de adicionar o produto ao carrinho e mudar o estado do carrinho lá do header
    alert('Produto Adicionado ao Carrinho, sqn');//trocar pro react-toastify pra aparecer msg mais amigavel
    navigation.navigate('Products')
  }
  



  return (
    <ScrollView >
      <View style={styles.card}>
      <Image source={{ uri: product?.image }} style={styles.imagedt} />
      
      <Text style={styles.name}>{product?.name}</Text>
      <Text style={styles.price}>R$ {product?.price.toFixed(2)}</Text>
      
      <Text style={styles.buttonDt} onPress={addOnCart}>ADICIONAR AO CARRINHO</Text>
      <Text style={styles.buttonDt} onPress={() => {navigation.navigate('Cart')}}>COMPRAR</Text>
      
      <Text style={styles.name}>Detalhe:{product?.detail}</Text>
      </View>
    </ScrollView>
  );
};

// nessa tela de detalhe do produto ele tem o botão de comprar e de adicionar ao carrinho
// se clicou em comprar irá pra tela do carrinho e exibe todos itens q estão no carrinho
// incluindo esse ultimo q ele viu e clicou em comprar

// agora se ele clica em adicionar ao carrinho exibe a msg q o item foi adicionado ao carrinho
// e leva ele pra tela de produto de volta
export default DetailProducts;