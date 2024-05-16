import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import styles from '../../styles';

// Dados mocados de produtos 
const products = [
  { id: 1, nome: 'Processador AMD Ryzen 5 5600X', preco: 1399.90, imagem: 'https://avatars.githubusercontent.com/u/91507840?s=400&u=18fdde96751cc79bdcd09143b025c8af8fe1ad06&v=4' },
  { id: 2, nome: 'Processador Intel Core i5-12600K', preco: 1799.90, imagem: 'https://avatars.githubusercontent.com/u/91507840?s=400&u=18fdde96751cc79bdcd09143b025c8af8fe1ad06&v=4' },
  { id: 3, nome: 'Processador AMD Ryzen 7 5800X3D', preco: 2299.90, imagem: 'https://avatars.githubusercontent.com/u/91507840?s=400&u=18fdde96751cc79bdcd09143b025c8af8fe1ad06&v=4' },
];

// const Products = ({ navigation }: NativeStackScreenProps<RootStackParamList>) => {
  type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;
  const Products = ({ navigation }: Props) => {  
const [pesquisa, setPesquisa] = React.useState('');

  const productsFiltrados = products.filter(product =>
    product.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      > */}
        <TextInput
          style={styles.input}
          placeholder="Pesquisar produtos..."
          value={pesquisa}
          onChangeText={setPesquisa}
        />

        <FlatList
          data={productsFiltrados}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailProducts', { product: item })}>
              <CardProduct product={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};
type CardProductProps = {
  product: {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
  };
};

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imagem }} style={styles.image} />
      <Text style={styles.name}>{product.nome}</Text>
      <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
    </View>
  );
};

export default Products;

// import { StyleSheet } from 'react-native';

// const productStyles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
//   card: {
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     marginBottom: 16,
//     alignItems: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 14,
//     color: '#888',
//   },
// });
