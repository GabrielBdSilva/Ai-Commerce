import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

import { RouteProp, useRoute } from '@react-navigation/native';
import styles from '../../Styles/styles';
import client from '../services/api';

import { CartContext } from '../context/CartContext';


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

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  const [cart, setCart] = useState<Product[]>([]);
  const { addToCart } = useContext(CartContext);

  const fetchProductDetails = async () => {
    
      const response = await client.get(`/products/${productId}`);
      setProducts(response.data);
   
  };

  const fetchRelatedProducts = async () => {
    try {
      const response = await client.get(`/products`);
      setRelatedProducts(response.data.slice(0, 5));
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };


  useEffect(() => {
    fetchProductDetails();
    fetchRelatedProducts();
  }, [productId]);

  

  const addOnCart = () => {
    if (product) {
      addToCart(product);
      alert('Produto Adicionado ao Carrinho');
      navigation.navigate('Products');
    }
  };
  



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
      {relatedProducts.length > 0 && (
        <View style={{alignItems:'center'}}>
          <Text style={{padding:5,textAlign:'center', fontSize:13, backgroundColor:'#DCEFF1'}}>Recomendação de itens complementares</Text>
          <FlatList
            data={relatedProducts}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailProducts', { productId: item.id })}
              >
                <CardProduct product={item} />
              </TouchableOpacity>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </ScrollView>
  );
};

const CardProduct = ({ product }: { product: Product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }}style={styles.image}  />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
    </View>
  );
};


// nessa tela de detalhe do produto ele tem o botão de comprar e de adicionar ao carrinho
// se clicou em comprar irá pra tela do carrinho e exibe todos itens q estão no carrinho
// incluindo esse ultimo q ele viu e clicou em comprar

// agora se ele clica em adicionar ao carrinho exibe a msg q o item foi adicionado ao carrinho
// e leva ele pra tela de produto de volta
export default DetailProducts;