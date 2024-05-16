import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../../styles';

const DetailProducts = () => {
  const route = useRoute();
  const product = route.params.product; // Accessing the entire product object

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imagem }} style={styles.image} />
      <Text style={styles.name}>{product.nome}</Text>
      <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
      {/* ... other details of the product */}
    </View>
  );
};

export default DetailProducts;