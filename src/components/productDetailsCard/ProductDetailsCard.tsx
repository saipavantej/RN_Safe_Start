import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ProductDetailsApiResponse} from '../../services';

type ProductProps = {
  data: ProductDetailsApiResponse;
};

const ProductDetailsCard: React.FC<ProductProps> = ({
  data: {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  },
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.discount}> (-{discountPercentage}%)</Text>
        </View>
        <Text style={styles.rating}>Rating: {rating}</Text>
        <Text style={styles.stock}>Stock: {stock}</Text>
        <Text style={styles.brand}>Brand: {brand}</Text>
        <Text style={styles.category}>Category: {category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  discount: {
    fontSize: 14,
    color: '#28A745',
  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
    color: '#6C757D',
  },
  stock: {
    fontSize: 14,
    marginBottom: 5,
    color: '#DC3545',
  },
  brand: {
    fontSize: 14,
    color: '#17A2B8',
  },
  category: {
    fontSize: 14,
    color: '#6C757D',
  },
});

export default ProductDetailsCard;
