import React, { useContext, useEffect, useState } from 'react';
import{View,Text,FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../../Styles/styles';
import client from '../services/api';

import { CartContext } from '../context/CartContext';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  detail:string;
};

const Cart = ({navigation}:NativeStackScreenProps<RootStackParamList>) => {
  const { cart } = useContext(CartContext);

  const [relatedProducts, setRelatedProducts] = useState([]);

  // const fetchRelatedProducts = async () => {
  //   try {
  //     const response = await client.get(`/products`);
  //     setRelatedProducts(response.data.slice(0, 1));
  //   } catch (error) {
  //     console.error('Error fetching related products:', error);
  //   }
  // };


  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await client.get(`/products`);
        setRelatedProducts(response.data.slice(0, 1));
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  },[]);//aqui preciso mandar os produtos q tenho e então a ia devolver o produto recomendado


  return (
    <SafeAreaView style={{alignItems:'center'}}>
    <Text style={{padding:10,textAlign:'center', fontSize:20, backgroundColor:'#DCEFF1'}}>No Carrinho</Text>
    {cart.length > 0 ? (
      <FlatList
        data={cart}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardCart}>

            <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>

          </View>
        )}
      />

      
    ) : (
      <Text >Carrinho vazio :-/</Text>
    )}


      <Text style={{padding:5,textAlign:'center', fontSize:13, backgroundColor:'#DCEFF1'}}>Recomendação Magica</Text>
        <FlatList
          data={relatedProducts}
          renderItem={({ item }) => (
            
              <RecomendacaoMagica product={item} />
            
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

     


    <Text style={styles.buttonDt} onPress={() => { navigation.navigate('Login') }}>Voltar a Tela de Login</Text>
  </SafeAreaView>
  );
};






const RecomendacaoMagica = ({ product }: { product: Product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }}style={styles.image}  />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
    </View>
  );
};





export default Cart;