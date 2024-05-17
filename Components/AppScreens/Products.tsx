import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../../Styles/styles';
import client from '../services/api';

// Dados mocados de produtos 
// const products = [
//   { id: 1, name: 'Processador AMD Ryzen 5 5600X', price: 1399.90, image: 'https://avatars.githubusercontent.com/u/91507840?s=400&u=18fdde96751cc79bdcd09143b025c8af8fe1ad06&v=4' },
//   { id: 2, name: 'Processador Intel Core i5-12600K', price: 1799.90, image: 'https://avatars.githubusercontent.com/u/91507840?s=400&u=18fdde96751cc79bdcd09143b025c8af8fe1ad06&v=4' },
//   { id: 3, name: 'Processador AMD Ryzen 7 5800X3D', price: 2299.90, image: 'https://avatars.githubusercontent.com/u/91507840?s=400&u=18fdde96751cc79bdcd09143b025c8af8fe1ad06&v=4' },
// ];

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

  type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;
  const Products = ({ navigation }: Props) => {  
    const [products, setProducts] = useState<Product[]>([]);
    const [pesquisa, setPesquisa] = React.useState('');
    

    const fetchProducts = async () => {
      
        const response = await client.get('/products'); 
        setProducts(response.data);
    
    };
    useEffect(() => {
      fetchProducts();
    }, []);




  const productsFiltrados = products.filter(product =>
    product.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      
        <TextInput
          style={styles.input}
          placeholder="Pesquisar produtos..."
          value={pesquisa}
          onChangeText={setPesquisa}
        />

        <FlatList
          data={productsFiltrados}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailProducts', { productId: item.id })}>
              <CardProduct product={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      
    </SafeAreaView>
  );
};
type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
    </View>
  );
};

export default Products;

