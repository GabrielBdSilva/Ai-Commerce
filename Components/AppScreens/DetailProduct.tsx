import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import styles from '../../Styles/styles';
import { RootStackParamList } from '../../App';
import client from '../services/api';


type DetailProductsRouteProp = RouteProp<RootStackParamList, 'DetailProducts'>;

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const DetailProducts = () => {
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

  // const product = route.params.product; // Accessing the entire product object




  return (
    <View style={styles.card}>
      <Image source={{ uri: product?.image }} style={styles.image} />
      <Text style={styles.name}>{product?.name}</Text>
      <Text style={styles.price}>R$ {product?.price.toFixed(2)}</Text>
      {/* ... other details of the product */}
    </View>
  );
};

export default DetailProducts;